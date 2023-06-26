module.exports = {
	"env": {
		"node": true,
		"browser": true,
		"es2022": true,
		"shared-node-browser": true
	},
	"overrides": [{
		"plugins": [
			"@typescript-eslint",
			"react"
		],
		"files": ["src/**/*.ts?(x)"],
		"parser": "@typescript-eslint/parser",
		"parserOptions": {
			"sourceType": "module",
			"ecmaVersion": 2022,
			"ecmaFeatures": {
				"jsx": true
			},

			"warnOnUnsupportedTypeScriptVersion": true
		},
	}],

	"rules": {
		"array-bracket-spacing": ["warn", "never", { 
			"objectsInArrays": false, 
			"arraysInArrays": false 
		}],
		"array-callback-return": ["warn", { "allowImplicit": true }],
		"arrow-body-style": "warn",
		"arrow-parens": "warn",
		"arrow-spacing": "warn",
		"block-spacing": "warn",
		"brace-style": "warn",
		"comma-dangle": "warn",
		"comma-spacing": ["warn", { 
			"before": false, 
			"after": true 
		}],
		"constructor-super": "warn",
		"for-direction": "error",
		"func-call-spacing": "warn",
		"getter-return": ["error", { "allowImplicit": true }],
		"jsx-quotes": ["warn", "prefer-double"],
		"key-spacing": ["warn", { 
			"mode": "minimum"
		}],
		"linebreak-style": ["warn", "windows"],
		"max-len": ["error", { "code": 130 }],
		"new-parens": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-cond-assign": ["error", "except-parens"],
		"no-const-assign": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": ["error", { "checkLoops": false }],
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
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used"}],
		"no-useless-constructor": "error",
		"no-use-before-define": ["error", {
        "functions": false,
        "classes": true,
        "variables": true,
        "allowNamedExports": true
    }],
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"one-var": "error",
		"prefer-exponentiation-operator": "warn",
		"quotes": ["warn", "double"],
		"require-await": "warn",
		"semi": ["error", "always"],
		"space-before-blocks": "warn",
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "never"
		}],
		"space-infix-ops": "warn",
		"space-in-parens": ["warn", "never"]
	}
};