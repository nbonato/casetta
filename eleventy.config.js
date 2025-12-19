import { I18nPlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { IdAttributePlugin } from "@11ty/eleventy";



export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/css");
  eleventyConfig.addPassthroughCopy("docs/assets");
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(IdAttributePlugin);


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
	pathPrefix: "/casetta/"
  };
}
