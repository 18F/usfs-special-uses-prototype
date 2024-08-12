const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "http://localhost:8080",
    },
  });
  return {
    dir: {
      input: "src",
      output: "site",
    },
  };
};
