module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    plugins: [
        'vue'
    ],
    globals: {
        mapGetters: true,
        mapActions: true,
        mapState: true,
        mapMutations: true,
        Vue: true,
        IS_DEVELOPMENT: true,
        IS_PRODUCTION: true
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ],
    rules: {
        'generator-star-spacing': 'off',
        'camelcase': [0, { properties: 'never' }],
        'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
        'no-var': 2,
        'object-shorthand': [2, 'always'],
        'quote-props': [2, 'consistent-as-needed'],
        'array-callback-return': [2, { allowImplicit: true }],
        'prefer-destructuring': [2, {
            VariableDeclarator: {
                array: false,
                object: true
            }
        }],
        'prefer-rest-params': 2,
        'eqeqeq': [2, 'always'],
        'no-case-declarations': 2,
        'no-unneeded-ternary': 2,
        'no-else-return': ['error', { allowElseIf: true }],
        'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
        'array-bracket-spacing': [2, 'never'],
        'object-curly-spacing': [2, 'always'],
        'arrow-parens': [2, 'as-needed'],
        'no-confusing-arrow': [2, { allowParens: true }],
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-restricted-syntax': [2, 'ForInStatement', 'ForOfStatement'],
        'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
        'indent': [2, 4, { SwitchCase: 1 }],
        'semi': [2, 'always'],
        'no-debugger': 0,
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'quotes': [2, 'single'],
        'no-multi-assign': 2,
        'vue/html-indent': [2, 4, {
            attribute: 1,
            closeBracket: 0
        }],
        'vue/max-attributes-per-line': [2, {
            singleline: 3,
            multiline: {
                allowFirstLine: false
            }
        }],
        'vue/order-in-components': 2,
        'vue/attributes-order': [2, {
            order: [
                'GLOBAL',
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'UNIQUE',
                'OTHER_ATTR',
                'BINDING',
                'CONTENT',
                'EVENTS'
            ]
        }],
        'vue/html-self-closing': 0,
        'vue/html-closing-bracket-newline': [2, {
            singleline: 'never',
            multiline: 'always'
        }],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ]
    }
};
