module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/jsx-a11y',
    './rules/prettier',
    './rules/react',
    './rules/react-hooks',
  ].map(require.resolve),
  rules: {}
};
