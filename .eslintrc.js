module.exports = {
	env: {
		"node": true,
		"browser": true,
		"es2022": true,
		"shared-node-browser": true
	},
	plugins: ["react", "react-hooks", "jsx-a11y", "jest", "prettier", "import", "@typescript-eslint"],
	overrides: [
		{
			files: ["src/**/*.ts?(x)"],
			extends: [
				"prettier",
				"plugin:react-hooks/recommended",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime"
			],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				ecmaVersion: 2022,
				ecmaFeatures: {
					jsx: true
				},

				warnOnUnsupportedTypeScriptVersion: true
			},
			settings: {
				react: {
					version: "detect"
				}
			}
		}
	],
	rules: {
		"array-bracket-spacing": [
			"warn",
			"never",
			{
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		"array-callback-return": ["warn", { allowImplicit: true }],
		"arrow-body-style": "warn",
		"arrow-parens": "warn",
		"arrow-spacing": "warn",
		"block-spacing": "warn",
		"brace-style": "warn",
		"comma-dangle": "warn",
		"comma-spacing": [
			"warn",
			{
				before: false,
				after: true
			}
		],
		"constructor-super": "warn",
		"for-direction": "error",
		"func-call-spacing": "warn",
		"getter-return": ["error", { allowImplicit: true }],
		"jsx-quotes": ["warn", "prefer-double"],
		"key-spacing": [
			"warn",
			{
				mode: "minimum"
			}
		],
		"linebreak-style": ["warn", "unix"],
		"max-len": ["error", { code: 110 }],
		"new-parens": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-cond-assign": ["error", "except-parens"],
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", { checkLoops: false }],
		"no-constructor-return": "error",
		"no-debugger": "warn",
		"no-dupe-args": "error",
		"no-dupe-class-members": "warn",
		"no-dupe-else-if": "warn",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "warn",
		"no-empty": "warn",
		"no-empty-pattern": "error",
		"no-multi-spaces": "warn",
		"no-setter-return": "warn",
		"no-unused-private-class-members": "warn",
		"no-unused-vars": ["warn", { vars: "all", args: "after-used" }],
		"no-useless-constructor": "error",
		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: true
			}
		],
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"prefer-exponentiation-operator": "warn",
		"quotes": ["warn", "double"],
		"require-await": "warn",
		"semi": ["error", "always"],
		"space-before-blocks": "warn",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "never"
			}
		],
		"space-infix-ops": "warn",
		"space-in-parens": ["warn", "never"],

		"import/first": "error",
		"import/no-amd": "error",
		"import/no-anonymous-default-export": "warn",
		"import/no-webpack-loader-syntax": "error",

		"jsx-a11y/alt-text": "warn",
		"jsx-a11y/anchor-has-content": "warn",
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				aspects: ["noHref", "invalidHref"]
			}
		],
		"jsx-a11y/aria-activedescendant-has-tabindex": "warn",
		"jsx-a11y/aria-props": "warn",
		"jsx-a11y/aria-proptypes": "warn",
		"jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
		"jsx-a11y/aria-unsupported-elements": "warn",
		"jsx-a11y/heading-has-content": "warn",
		"jsx-a11y/iframe-has-title": "warn",
		"jsx-a11y/img-redundant-alt": "warn",
		"jsx-a11y/no-access-key": "warn",
		"jsx-a11y/no-distracting-elements": "warn",
		"jsx-a11y/no-redundant-roles": "warn",
		"jsx-a11y/role-has-required-aria-props": "warn",
		"jsx-a11y/role-supports-aria-props": "warn",
		"jsx-a11y/scope": "warn"
	}
};
