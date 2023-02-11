const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@api": path.resolve(__dirname, "src/api"),
      "@core": path.resolve(__dirname, "src/core"),
      "@appTypes": path.resolve(__dirname, "src/appTypes"),
    },
  },
};