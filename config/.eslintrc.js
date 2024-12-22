module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        // Add or override rules here
    }
};
