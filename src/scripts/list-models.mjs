import fs from 'fs';
import path from 'path';

// Manual ENV parser to avoid dependencies
function loadEnv() {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (!fs.existsSync(envPath)) return {};
    const content = fs.readFileSync(envPath, 'utf8');
    const env = {};
    content.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        let val = match[2] || '';
        if (val.length > 0 && val.startsWith('"') && val.endsWith('"')) val = val.substring(1, val.length - 1);
        if (val.length > 0 && val.startsWith("'") && val.endsWith("'")) val = val.substring(1, val.length - 1);
        env[match[1]] = val;
      }
    });
    return env;
  } catch (e) {
    return {};
  }
}

const env = loadEnv();
const apiKey = env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;

if (!apiKey) {
  console.error("❌ GOOGLE_API_KEY not found in .env.local or environment variable.");
  process.exit(1);
}

async function listModels() {
  const versions = ['v1', 'v1beta'];
  
  console.log("🔍 Checking available Gemini models for your API key...");

  for (const version of versions) {
    try {
      const url = `https://generativelanguage.googleapis.com/${version}/models?key=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        console.log(`\n✅ [${version}] Found models:`);
        const modelNames = data.models?.map(m => m.name) || [];
        if (modelNames.length === 0) {
          console.log("   (No models returned by the API for this version)");
        } else {
          modelNames.forEach(name => console.log(`   - ${name}`));
        }
      } else {
        console.error(`\n❌ [${version}] API call failed (${res.status}): ${data.error?.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(`\n☢️ [${version}] Connection error: ${err.message}`);
    }
  }
}

listModels();
