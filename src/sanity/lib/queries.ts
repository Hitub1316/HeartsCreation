import { client } from "./client";

// Get all artworks
export async function getAllArtworks() {
  return client.fetch(`
    *[_type == "artwork"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      image,
      hoverImage,
      price,
      size,
      medium,
      available,
      featured,
      "categoryName": category->name,
      "categorySlug": category->slug.current
    }
  `);
}

// Get artworks grouped by category
export async function getArtworksGroupedByCategory() {
  return client.fetch(`
    *[_type == "category"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      "artworks": *[_type == "artwork" && references(^._id)] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        image,
        hoverImage,
        price,
        size,
        medium,
        available,
        featured
      }
    }
  `);
}

// Get only featured artworks
export async function getFeaturedArtworks() {
  return client.fetch(`
    *[_type == "artwork" && featured == true] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      image,
      hoverImage,
      price,
      size,
      medium,
      available,
      "categoryName": category->name,
      "categorySlug": category->slug.current
    }
  `);
}

// Get single artwork by slug
export async function getArtworkBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "artwork" && slug.current == $slug][0] {
      ...,
      "category": category->{
        name,
        "slug": slug.current,
        description
      }
    }
  `,
    { slug }
  );
}

// Get all categories
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] {
      _id,
      name,
      "slug": slug.current,
      description,
      coverImage
    }
  `);
}

// Get blog post by slug (Placeholder for build)
export async function getBlogPostBySlug(slug: string) {
  return null; // Return null to trigger fallback in the page component
}

// Get site settings (Singleton)
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      ...
    }
  `);
}
