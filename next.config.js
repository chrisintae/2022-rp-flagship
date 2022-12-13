const withImages = require("next-images");

module.exports =
  ({
    pageExtensions: ["tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push(
        ...[
          {
            test: /\.yml$/,
            type: "json",
            use: "yaml-loader",
          },
          {
            test: /\.svg$/,
            use: "@svgr/webpack",
          },
        ]
      );
      return config;
    },
  },
  withImages({
    webpack(config, options) {
      return config;
    },
  }));
