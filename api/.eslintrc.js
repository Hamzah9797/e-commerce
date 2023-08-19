module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    "no-console": "warn",
  },
};
