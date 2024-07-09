module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // Disable all rules
    "no-unused-vars": "off",
    "no-console": "off",
    "react/prop-types": "off",
    // Add other rules you want to bypass
  },
};
