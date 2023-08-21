// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Basic Rules
    indent: ["error", 2],
    // semi: ["error", "always"],
    "no-console": "warn",

    // React Rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
