export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Hearts Creation",
    },
    {
      name: "tagline",
      title: "Hero Tagline",
      type: "string",
      initialValue: "There is art in every heart.",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "featuredArtworks",
      title: "Featured Artworks",
      type: "array",
      of: [{ type: "reference", to: [{ type: "artwork" }] }],
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      initialValue: "+91 80550 69122",
    },
    {
      name: "shippingAddress",
      title: "Shipping Address / City",
      type: "string",
      description: "The city from which artworks are shipped (e.g., Hyderabad). This reflects on the Contact Page and Artwork bottom text.",
      initialValue: "Hyderabad",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      initialValue: "https://www.instagram.com/hearts_creations/",
    },
    {
      name: "etsyUrl",
      title: "Etsy URL",
      type: "url",
      initialValue: "https://www.etsy.com/in-en/shop/HeartsCreationsByAJ?ref=search_shop_redirect&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    },
    {
      name: "pinterestUrl",
      title: "Pinterest URL",
      type: "url",
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    },

  ],
};
