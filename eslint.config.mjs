import defaultConfigs from '@gennex/eslint-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const VALID_NAMING_TYPES = [
  'RootState',
  'AppState',
  'AppDispatch',
  'Dispatcher',
  'Prop',
  'Props',
].join('|');

const defaultConfigsFiltered = defaultConfigs.filter(
  (conf) => conf.name !== 'eslint-plugin-prettier/recommended',
);

const config = [
  ...defaultConfigsFiltered,
  {
    files: ['**/*.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'src/components/shadcn/', 'dev-dist/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex:
              '^(T|Type|Any|Promise|Number|String|Object|Value)[A-Z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*(Type|Promise|Number|String|Object|Value|Like|Prop|Props)$',
            match: true,
          },
          filter: {
            regex: `^(${VALID_NAMING_TYPES})$`,
            match: false,
          },
        },
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'memberLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['property', 'objectLiteralProperty', 'typeProperty'],
          format: null,
          filter: {
            regex: '^smart_count$',
            match: true,
          },
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: [
            'b',
            'do',
            'is',
            'has',
            'use',
            'can',
            'did',
            'auto',
            'will',
            'with',
            'force',
            'should',
            'error',
            'success',
            'require',
            're',
            'rs',
            'enabled',
            'enable',
            'disabled',
            'disable',
            'activated',
            'activate',
            'deactivated',
            'deactivate',
            'ignore',
          ],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'property',
          format: ['PascalCase'],
          filter: { regex: '[-]', match: true },
        },
        {
          selector: ['objectLiteralProperty', 'objectLiteralMethod'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  },
  {
    files: ['**/locales/*.ts'],
    rules: { '@typescript-eslint/naming-convention': ['off'] },
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      curly: ['error', 'all'],
      'no-useless-assignment': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];

export default config;
