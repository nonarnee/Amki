// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
  },
  env: {
    node: true,
  }
};
