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
