---
title: Home
layout: mylayout.njk
permalink: "/"
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Redirecting…</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/styles.css">
    <script>
      (function () {
        var fallback = "it"; // default language
        var supported = ["it", "en"]; // adjust to your locales
        var lang = (navigator.language || navigator.userLanguage || "").toLowerCase();
        var short = lang.slice(0, 2);
        var chosen = supported.indexOf(short) !== -1 ? short : fallback;
        var targetPath = "/casetta/" + chosen + "/";
        // Try to redirect automatically
        if (location.pathname === "/" || location.pathname === "/casetta/") {
          window.location.replace(targetPath);
        }
        // Also update the visible link to match the detected language
        document.addEventListener("DOMContentLoaded", function () {
          var link = document.getElementById("lang-link");
          if (link) {
            link.href = targetPath;
            link.textContent = "Go to " + chosen.toUpperCase() + " homepage";
          }
        });
      })();
    </script>
  </head>
  <body>
    <main class="redirect-page">
      <h1>Redirecting…</h1>
      <p>
        If you are not redirected automatically, use this link:
        <a id="lang-link" href="/casetta/it/">Go to IT homepage</a>
      </p>
    </main>
  </body>
</html>
