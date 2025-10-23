// Remove language from permalink path, to make it default
module.exports = {
  permalink: data => {
    return data.page.fileSlug === "it"
      ? "/"
      : `/${data.page.fileSlug}/`;
  }
};