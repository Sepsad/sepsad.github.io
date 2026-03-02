const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Enable raw HTML in markdown files (needed for contact page dl layout)
  const md = markdownIt({ html: true });
  eleventyConfig.setLibrary("md", md);

  // Pass through static assets without processing
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("content"); // blog posts fetched client-side

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
