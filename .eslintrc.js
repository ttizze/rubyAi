module.exports = {
    env: {
        browser: true,
        webextensions: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { code: 200 }],
        'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement', 'ForInStatement'],
    },
};
