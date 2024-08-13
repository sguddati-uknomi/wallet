// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  rules: {
    "no-unused-vars": "warn", // Shows as a warning
    semi: ["warn", "always"], // Requires semicolons, warns if missing
  },
};
