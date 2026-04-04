import { type SchemaTypeDefinition } from "sanity";
import artwork from "./schemas/artwork";
import category from "./schemas/category";
import siteSettings from "./schemas/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artwork, category, siteSettings],
};
