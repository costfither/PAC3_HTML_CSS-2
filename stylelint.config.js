module.exports = {
  extends: "stylelint-config-recommended-scss",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
        ],
      },
    ],
  },
};
