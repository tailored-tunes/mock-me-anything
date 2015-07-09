'use strict';

module.exports = function (grunt, options) {
	return {
		color: true,
		coverage: true,
		minCoverage: 89,
		files: options.jsTestFiles
	};
};
