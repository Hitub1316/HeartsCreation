import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const apiKey = process.env.GOOGLE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: "Google API Key missing",
        message: "Please add GOOGLE_API_KEY to your .env.local"
      }, { status: 500 });
    }

    // 1. Fetch all artworks from Sanity with metadata
    const artworks = await client.fetch(`
      *[_type == "artwork"] {
        _id,
        title,
        medium,
        size,
        "story": coalesce(story[0].children[0].text, content, ""),
        "slug": slug.current,
        "imageUrl": image.asset->url
      }
    `);

    // 2. Prepare the prompt for Gemini
    const context = `
      You are the personal Art Soul of "Heart's Creation", an intimate art studio by artist Arunima Jain.
      Arunima's art is not just visual; it is a journey through "Silence Blooming", "Fragmented Thoughts", and "Moments Between Worlds".
      
      Your personality: Elegant, deeply poetic, and emotionally intuitive. 
      The brand aesthetic: Rich maroons, deep textures, metallic whispers, and "maroon borders" that frame the soul's echoes.
      
      Here is Arunima's current catalog from her private collection:
      ${artworks.map((a: any) => `- ID: ${a._id}, Title: ${a.title}, Medium: ${a.medium}, Story: ${a.story}`).join("\n")}
      
      User is feeling or looking for: "${query}"
      
      Task:
      1. Feel the user's emotion or intent behind their words.
      2. Choose 1-3 pieces that resonate with that specific soul-state.
      3. For each, give a short, evocative reason (1 sentence) that connects the user's mood to Arunima's specific brushstrokes or concept.
      
      Format the response as raw JSON. Do not include any markdown or conversational text.
      
      Structure:
      {
        "intentAnalyzed": "string",
        "recommendations": [
          {
            "id": "string",
            "reason": "string"
          }
        ],
        "message": "A short, elegant intro for the recommendations."
      }
    `;

    // 3. Multi-Model and Multi-Version Fallback Strategy (Updated with discovered models)
    const endpoints = [
      "v1/models/gemini-2.5-flash",
      "v1/models/gemini-2.0-flash",
      "v1beta/models/gemini-flash-latest",
      "v1beta/models/gemini-pro-latest"
    ];

    let response;
    let successEndpoint = "";

    for (const endpoint of endpoints) {
      try {
        const url = `https://generativelanguage.googleapis.com/${endpoint}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: context }] }]
          })
        });

        if (res.ok) {
          response = await res.json();
          successEndpoint = endpoint;
          console.log(`✅ AI connected via: ${endpoint}`);
          break; // Successfully got a result
        } else {
          const errBody = await res.json();
          const msg = errBody.error?.message || "Unknown error";
          console.error(`❌ Endpoint ${endpoint} failed (${res.status}): ${msg}`);
          if (res.status === 403) {
             console.warn("⚠️ Tip: Check if 'Generative Language API' is enabled in Google AI Studio or Cloud Console.");
          }
        }
      } catch (err: any) {
        console.error(`☢️ Connection error to ${endpoint}:`, err.message);
      }
    }

    if (!response) {
      throw new Error(`AI disconnected across all 4 attempts. Check your terminal logs for specific 403 or 429 errors.`);
    }

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    
    // Extract JSON (handles case where AI includes markdown code blocks)
    let jsonStr = text;
    if (text.includes("```")) {
      const match = text.match(/```(?:json)?([\s\S]*?)```/);
      if (match) jsonStr = match[1];
    }
    
    // Clean whitespace and parse
    const aiResponse = JSON.parse(jsonStr.trim());

    // 4. Match recommendations with full artwork data
    const finalResults = (aiResponse.recommendations || []).map((rec: any) => {
      const art = artworks.find((a: any) => a._id === rec.id);
      if (!art) return null;
      return { ...art, reason: rec.reason };
    }).filter(Boolean);

    return NextResponse.json({
      intent: aiResponse.intentAnalyzed,
      message: aiResponse.message,
      results: finalResults
    });

  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json({ 
      error: "Consultation failed", 
      message: error.message
    }, { status: 500 });
  }
}
