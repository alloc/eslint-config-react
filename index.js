module.exports = {
  extends: [require.resolve('./a11y.js')],
  parser: '@typescript-eslint/parser',
  plugins: [
    require.resolve('eslint-plugin-react'),
    require.resolve('eslint-plugin-jsx-expressions'),
  ],
  rules: {
    'jsx-expressions/strict-logical-expressions': 'error',
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    'react/jsx-no-comment-textnodes': 'error',
  },
}
