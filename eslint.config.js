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
    // Disable the problematic rule causing issues
    "import/no-unresolved": "off",

    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-unused-vars": "off",
    "jsx-a11y/heading-has-content": "off",
    // Add other rules you want to bypass
  },
};
