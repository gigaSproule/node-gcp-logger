"use strict";

module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    __dirname: "readonly",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: false
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "script"
  },
  plugins: ["security", "import"],
  rules: {
    "prettier/prettier": "error",
    strict: "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "directive", next: "*" }
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"]
      }
    ],
    "import/newline-after-import": ["error", { count: 1 }]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    }
  },
  overrides: [
    {
      files: "jest/src/*.js",
      parserOptions: {
        sourceType: "module"
      }
    },
    {
      files: "*.ts",
      excludedFiles: ["*.test.ts"],
      rules: {
        "no-console": "error"
      }
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      env: {
        browser: false,
        node: true
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // Add TypeScript specific rules (and turn off ESLint equivalents)
        "@typescript-eslint/consistent-type-assertions": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false
          }
        ],
        "no-unused-expressions": "error",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
          }
        ],
        "no-unused-vars": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "none",
            ignoreRestSiblings: true
          }
        ],
        "@typescript-eslint/no-useless-constructor": "warn"
      }
    },
    {
      files: ["*.test.ts"],
      env: {
        node: true,
        jest: true
      },
      plugins: ["jest"]
    }
  ]
};
