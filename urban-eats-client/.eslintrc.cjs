module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest", // Or a specific ECMAScript version like 2020
    sourceType: "module", // Ensure this is set to 'module' to support import/export syntax
    ecmaFeatures: {
      jsx: true
  },
  },
  settings: {
    react: {
        version: "detect" // Automatically detect the react version
    }
},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-refresh", "import", "prettier","react","react-hooks"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
  },
};
