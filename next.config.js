const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  images: {
    domains: ["media-exp1.licdn.com"],
  },
  env: {
    PAT: "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",
  },
});
