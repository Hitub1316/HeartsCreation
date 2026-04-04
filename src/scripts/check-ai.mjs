import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../../.env.local") });

async function checkModels() {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.error("❌ GOOGLE_API_KEY not found in .env.local");
    return;
  }

  console.log("🔍 Checking available models for your API key...");
  
  // Try v1 first
  try {
    const genAI = new GoogleGenerativeAI(apiKey); // Default
    const result = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent("ping");
    console.log("✅ Default (v1/v1beta) - gemini-1.5-flash is working!");
  } catch (e) {
    console.log("❌ Default gemini-1.5-flash failed:", e.message);
  }

  // Try listing
  try {
    // Note: The SDK doesn't expose listModels directly in many versions, 
    // we have to use the REST approach or check if it's there.
    console.log("\nNote: If direct generation failed, please ensure 'Generative Language API' is enabled in Google AI Studio or Cloud Console.");
    console.log("Also, try changing your model name to 'gemini-1.5-flash-8b' or 'gemini-1.5-pro' in your API route.");
  } catch (err) {
    console.error("List failed:", err.message);
  }
}

checkModels();
