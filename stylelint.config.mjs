/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "media-query-no-invalid": null,
    "nesting-selector-no-missing-scoping-root": null,
    "color-hex-length": null,
    "custom-property-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "declaration-property-value-no-unknown": null,
  },
};
