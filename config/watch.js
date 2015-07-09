'use strict';

module.exports = function (grunt, options) {

	return {
		configFiles: {
			files: options.configFiles,
			tasks: ['default'],
			options: {
				reload: true
			}
		},
		js: {
			files: options.jsFiles,
			tasks: ['eslint:base', 'lab']
		},
		jsTest: {
			files: options.jsTestFiles,
			tasks: ['eslint:test', 'lab'],
			options: {
				spawn: false
			}
		}
	};
};
