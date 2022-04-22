const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve("src"),
      "@components": path.resolve("src", "components"),
      "@common": path.resolve("src", "components", "common"),
      "@icons": path.resolve("src", "components", "common", "icons"),
      "@styles": path.resolve("src", "scss"),
      "@ui": path.resolve("src", "components", "UI"),
      "@helpers": path.resolve("src", "helpers"),
      "@api": path.resolve("src", "api"),
      "@hooks": path.resolve("src", "hooks"),
      "@views": path.resolve("src", "views"),
      "@routes": path.resolve("src", "routes"),
      "@assets": path.resolve("src", "assets"),
      "@interfaces": path.resolve("src", "interfaces"),
    },
    extensions: ["", ".js", ".jsx", ".ts", ".tsx", ".scss"],
  },
};
