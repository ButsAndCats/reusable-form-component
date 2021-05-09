module.exports = {
  root: true,
  parser: require.resolve("@typescript-eslint/parser"),
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "comma-dangle": ["error", "always-multiline"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  },
};
