module.exports = {
  settings: { react: { version: 'detect' } },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier'
  ],
  env: { es6: true, browser: true },
  plugins: ['prettier', 'react'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-restricted-imports': [
      'error',
      { patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'] }
    ]
  }
};
