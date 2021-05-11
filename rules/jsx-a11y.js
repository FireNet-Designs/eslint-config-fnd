module.exports = {
  plugins: [
    "jsx-a11y",
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
  },
}
