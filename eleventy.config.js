import { I18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/css"); // or { "docs/css": "css" }

  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "it",
    filters: {
      url: "locale_url",
      links: "locale_links",
    },
    errorMode: "allow-fallback",
  });

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "docs",
    },
  };
}
