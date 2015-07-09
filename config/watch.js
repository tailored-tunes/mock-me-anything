'use strict';

module.exports = function (grunt, options) {

	return {
		js: {
			files: options.jsFiles,
			tasks: ['eslint:base']
		},
		jsTest: {
			files: options.jsTestFiles,
			tasks: ['eslint:test']
		}
	};
};
