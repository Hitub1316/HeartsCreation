import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  functions: {
    // Separate the heavy Studio into its own worker
    studio: {
      routes: ["app/studio/[[...index]]/page"],
      patterns: ["studio/*"],
    },
    // The 'default' function will handle everything else (Main site & API)
  },
});
