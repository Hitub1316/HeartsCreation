import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Manual ENV parser
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
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID not found in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2023-01-01',
});

async function checkSanity() {
  console.log(`🔍 Testing Sanity connection for project: ${projectId}...`);
  try {
    const data = await client.fetch('*[_type == "artwork"][0...1]');
    console.log("✅ Sanity connection successful!");
    console.log("Data sample:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("❌ Sanity connection failed!");
    console.error("Error Code:", err.code);
    console.error("Message:", err.message);
    if (err.code === 'ENOTFOUND') {
      console.error("\n💡 TIP: 'ENOTFOUND' is a network error. Check if your internet is working or if the Project ID is mistyped in .env.local.");
    }
  }
}

checkSanity();
