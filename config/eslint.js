'use strict';

module.exports = function (grunt, options) {
	return {
		base: {
			options: {
				configFile: 'node_modules/eslint-config/.eslintrc',
				format: 'stylish'
			},
			files: [
				{
					src: options.jsFiles
				}
			]
		},
		test: {
			options: {
				configFile: 'node_modules/eslint-config/.eslintrc-test',
				format: 'stylish'
			},
			files: [
				{
					src: options.jsTestFiles
				}
			]
		}
	};
};
