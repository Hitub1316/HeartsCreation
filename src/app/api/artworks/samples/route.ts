import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  try {
    // 1. Fetch a pool of up to 40 artworks to allow for meaningful randomization
    const artworks = await client.fetch(`
      *[_type == "artwork"][0...40] {
        "imageUrl": image.asset->url
      }
    `);

    if (!artworks || artworks.length === 0) {
      return NextResponse.json({ samples: [] });
    }

    // 2. Randomly select 8 unique artwork URLs
    const shuffled = [...artworks].sort(() => 0.5 - Math.random());
    const samples = shuffled.slice(0, 8).map(a => a.imageUrl);

    return NextResponse.json({ samples });
  } catch (error: any) {
    console.error("Failed to fetch studio samples:", error);
    return NextResponse.json({ 
      error: "Sourcing failed", 
      message: error.message,
      samples: [] // Return empty to trigger high-fidelity fallbacks
    }, { status: 500 });
  }
}
