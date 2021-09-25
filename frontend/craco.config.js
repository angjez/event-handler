const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
      if (process.argv.includes("--analyze")) {
        config.plugins.push(new BundleAnalyzerPlugin());
      }
      return config;
    },
  },
  babel: {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          ssr: false,
          displayName: true,
          fileName: true,
          pure: true,
          minify: true,
        },
      ],
    ],
  },
};
