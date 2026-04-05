import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-03-17',
  token: process.env.SANITY_API_WRITE_TOKEN, // Requires write permissions
  useCdn: false,
});

const legalPages = [
  {
    _id: 'privacy-policy',
    _type: 'legal',
    title: 'Privacy Policy',
    slug: { _type: 'slug', current: 'privacy-policy' },
    subtitle: 'How we honor your space and data.',
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Our privacy protocols are as sacred as the art we create. We only collect information that you voluntarily provide when inquiring about an artwork.' }],
        markDefs: [],
        style: 'normal',
      }
    ]
  },
  {
    _id: 'terms-of-use',
    _type: 'legal',
    title: 'Terms of Use',
    slug: { _type: 'slug', current: 'terms-of-use' },
    subtitle: 'Our shared values and studio protocols.',
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'All artworks and images are the creative property of Arunima and are protected by international copyright laws.' }],
        markDefs: [],
        style: 'normal',
      }
    ]
  }
];

const studioPages = [
  {
    _id: 'about-studio',
    _type: 'studioPage',
    title: 'The Artist',
    slug: { _type: 'slug', current: 'about' },
    subtitle: 'Philosophy & Vision',
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "With over 12 years of dedicated practice, Arunima's work is a silent exploration of materialism and memory. Her process is a deliberate dance of glazes, textures, and conceptually staged emptiness." }],
        markDefs: [],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Working primarily with mixed media and modern acrylic techniques, her practice is defined by a meticulous attention to detail and a subtle yet powerful visual language." }],
        markDefs: [],
        style: 'normal',
      }
    ]
  },
  {
    _id: 'contact-studio',
    _type: 'studioPage',
    title: 'Inquiry',
    slug: { _type: 'slug', current: 'contact' },
    subtitle: 'Direct paths to our studio.',
    content: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: "Whether you seek a custom commission or wish to inquire about a gallery piece, we invite you to reach out through our direct channels." }],
        markDefs: [],
        style: 'normal',
      }
    ]
  }
];

async function seed() {
  console.log('--- Starting Studio Seeding ---');
  
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('Error: SANITY_API_WRITE_TOKEN is missing in .env.local');
    process.exit(1);
  }

  // Seed Legal
  for (const page of legalPages) {
    try {
      await client.createOrReplace(page);
      console.log(`Success: Upserted legal document "${page.title}"`);
    } catch (err) {
      console.error(`Error:`, err.message);
    }
  }

  // Seed Studio Pages
  for (const page of studioPages) {
    try {
      await client.createOrReplace(page);
      console.log(`Success: Upserted studio page "${page.title}"`);
    } catch (err) {
      console.error(`Error:`, err.message);
    }
  }

  console.log('--- Seeding Complete ---');
}

seed();
