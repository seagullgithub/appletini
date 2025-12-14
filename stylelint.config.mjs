/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  rules: {
    // enable classes with a slash (e.g. .w-1/2)
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(-[0-9]+\\/[0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
  },
  ignoreFiles: ["src/core/_preflight.scss"],
};
