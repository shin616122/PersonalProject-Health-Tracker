module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"google",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["tsconfig.json", "tsconfig.dev.json"],
		sourceType: "module",
	},
	ignorePatterns: [
		"/lib/**/*", // Ignore built files.
	],
	plugins: [
		"@typescript-eslint",
		"import",
	],
	rules: {
		quotes: ["error", "double"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"object-curly-spacing": ["error", "always"],
		indent: ["error", "tab"],
		"quote-props": ["error", "as-needed"],
	},
};