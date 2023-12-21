module.exports = {
  root: true,

  env: { browser: true, es2020: true },

  ignorePatterns: ["dist", ".eslintrc.cjs", "storybook-static"],

  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],

  plugins: ["react-refresh"],

  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
};
