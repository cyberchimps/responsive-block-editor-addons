const config = {
	"preset": "@wordpress/jest-preset-default",
	"coveragePathIgnorePatterns": [
		"<rootDir>/node_modules/",
		"<rootDir>/vendor/"
	],
	"transformIgnorePatterns": [
		"/node_modules/"
	],
	"transform": {
		"\\.js$": "<rootDir>/node_modules/@wordpress/jest-preset-default"
	},
	"testEnvironment": "jsdom"
}

module.exports = config;

// module.exports = {
// 	clearMocks: true,
// 	verbose: true,
// 	transform: {
// 	  '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
// 	},
// 	moduleFileExtensions: ['js'],
// 	setupFiles: ['<rootDir>/jest.setup.js'],
// 	coverageDirectory: 'coverage',
// 	moduleNameMapper: {
// 	  '^.+\\.(css|less|scss|sass)$': 'babel-jest',
// 	},
//   };