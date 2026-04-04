import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "qr1teroj",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: "skJbLgkWGisXR2TpAOfPic2ITieky8jECtQS498T6KH7Hy51OOFlqnTSCYXtxUfzbFAH5Kg9hCaTLKjwwXEj3loNNNuoeq4LJNke6cAbkQ3t26oo1eGMg8XVBTWQkwviuXphevOrgkiezJrBAuY1YDj6VIyuMCGImJs50fC55t2eFq2vY91n",
});

const dummyArtworks = [
  {
    _type: "artwork",
    title: "A Moment Between Worlds",
    slug: { _type: "slug", current: "a-moment-between-worlds" },
    price: 1200,
    size: "24” by 24”",
    medium: "Acrylic on canvas",
    story: [
      {
        _type: "block",
        children: [{ _type: "span", text: "This painting represents calm amidst chaos, the balance of energies, and mindfulness. Rather than bringing heaviness, it encourages introspection, grounding, and emotional balance." }],
        markDefs: [],
        style: "normal"
      }
    ],
    available: true,
    featured: true,
  },
  {
    _type: "artwork",
    title: "Where Silence Blooms",
    slug: { _type: "slug", current: "where-silence-blooms" },
    price: 1500,
    size: "24” by 24”",
    medium: "Acrylic on Canvas",
    story: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Balancing minimal composition with evocative detail, the painting invites contemplation. The window becomes a metaphorical threshold—offering a glimpse into memory, solitude, or an unseen world beyond." }],
        markDefs: [],
        style: "normal"
      }
    ],
    available: true,
    featured: true,
  },
  {
    _type: "artwork",
    title: "Shiv k Nadi",
    slug: { _type: "slug", current: "shiv-k-nadi" },
    price: 950,
    size: "24” inches by 18” inches",
    medium: "Mix media on canvas",
    story: [
      {
        _type: "block",
        children: [{ _type: "span", text: "A symbol of strength, devotion & unstoppable presence. Abstract interpretation of divine energy in motion, where silence holds power. Rooted in devotion, driven by power." }],
        markDefs: [],
        style: "normal"
      }
    ],
    available: true,
    featured: true,
  }
];

async function seed() {
  console.log("Starting seed process via ESM...");
  
  for (const artwork of dummyArtworks) {
    try {
      const result = await client.createIfNotExists({
        _id: `dummy-${artwork.slug.current}`,
        ...artwork
      });
      console.log(`Successfully synced: ${result.title}`);
    } catch (err) {
      console.error(`Error syncing ${artwork.title}:`, err.message);
    }
  }
  
  console.log("Seed process complete.");
}

seed();
