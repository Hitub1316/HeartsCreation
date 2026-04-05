/** @type {import('@opennextjs/aws').OpenNextConfig} */
const config = {
  default: {
    minify: true,
  },
  functions: {
    // Separate the heavy Studio into its own worker
    studio: {
      routes: ["app/studio/[[...index]]/page"],
      patterns: ["studio/*"],
    },
  },
};

export default config;
