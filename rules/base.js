module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-prettier",
    "eslint-config-prettier/react",
  ].map(require.resolve),
  globals: {
    "window": true,
    "document": true,
    "localStorage": true,
    "expect": true,
    "describe": true,
    "test": true,
    "jest": true,
    "beforeEach": true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  env: {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  rules: {
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": [
      "error",
      "except-parens"
    ],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      2,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "res|next|^err|^_",
        "varsIgnorePattern": "[iI]gnored",
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,

    "wrap-iife": [1, "inside"],

    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "no-multi-assign": "off",
    'no-plusplus': [
      "error", {
        "allowForLoopAfterthoughts": true
      }
    ],
  },
}
