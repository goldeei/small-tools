module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-media"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
