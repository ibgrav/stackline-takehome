module.exports = {
  root: true,

  env: { browser: true, es2020: true },

  ignorePatterns: ["dist", ".eslintrc.cjs", "storybook-static", "cdk.out"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"]
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],

  plugins: ["react-refresh"],

  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
  }
};
