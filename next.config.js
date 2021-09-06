const withPWA = require("next-pwa");
const path = require("path");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: ["media-exp1.licdn.com"],
  },
  env: {
    PAT: "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",
  },
});
