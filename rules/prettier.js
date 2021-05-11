module.exports = {
  plugins: [
    "prettier",
  ],

  "extends": [
    "prettier",
    "prettier/react"
  ],

  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
      }
    ],
  },
}
