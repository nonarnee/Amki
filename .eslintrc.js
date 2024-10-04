// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:@tanstack/query/recommended', 'plugin:import/warnings'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
          },
          {
            pattern: '@/*',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react*'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  env: {
    node: true,
  },
};
