module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "vue/html-indent": "off",
    "nuxt/no-cjs-in-config": "off",
    "vue/comment-directive": "off",
    "vue/multi-word-component-names": "off",
  },
  globals: {
    _: true,
  },
};
