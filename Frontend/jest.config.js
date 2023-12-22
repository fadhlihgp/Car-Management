/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	collectCoverage: true,
	coverageReporters: ["lcov", "text", "html"],
	coverageDirectory: "coverage",
	transformIgnorePatterns: ["node_modules\\/(?!axios\\react-toastify)"],
	transform: {
		"^.+\\.ts?$": "ts-jest",
		".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
		".+\\.(png|jpg|svg)$": "jest-transform-stub"
	},
	moduleNameMapper: {
		"^@dynatrace/strato-design-tokens/(.*)$": "<rootDir>/node_modules/@dynatrace/strato-design-tokens/$1",
		"^@dynatrace/strato-design-tokens$": "<rootDir>/node_modules/@dynatrace/strato-design-tokens",
		"^axios$": require.resolve("axios"),
		"^react-toastify$": require.resolve("react-toastify"),
	},
};
