import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error('Missing required environment variables for seeding.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01',
  useCdn: false,
  token,
});

const sampleReviews = [
  {
    _type: 'review',
    name: 'Meera R.',
    content: 'The Pichhwai artwork I received is breathe-taking. The detail on the gold leaf is exquisite. It has truly transformed my meditation space.',
    rating: 5,
    approved: true,
    date: new Date().toISOString(),
  },
  {
    _type: 'review',
    name: 'Sameer K.',
    content: 'Arunima\'s art brings such a warm, spiritual energy to my home. Highly recommend the custom furniture pieces! The craftsmanship is unmatched.',
    rating: 5,
    approved: true,
    date: new Date().toISOString(),
  },
];

async function seed() {
  console.log('Seeding reviews into Sanity...');
  try {
    for (const review of sampleReviews) {
      const result = await client.create(review);
      console.log(`Created review: ${result._id} - ${result.name}`);
    }
    console.log('Successfully seeded all reviews!');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
}

seed();
