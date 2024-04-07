const { whenProd } = require('@craco/craco');
const Critters = require('critters-webpack-plugin');
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        plugins: [
          ...webpackConfig.plugins,
          ...whenProd(
            () => [
              new Critters({
                preload: 'swap',
                preloadFonts: false
              }),
            ],
            []
          ),
          purgecss({
            content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
          }),
        ],
        ignoreWarnings: [
          function ignoreSourcemapsloaderWarnings(warning) {
            return (
                warning.module &&
                warning.module.resource.includes('node_modules') &&
                warning.details &&
                warning.details.includes('react-facebook-pixel')
            )
          },
        ],
      };
    },
  },
};