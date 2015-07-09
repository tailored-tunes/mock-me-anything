'use strict';

module.exports = function (grunt) {
	var options = {
			reportDir: 'reports',
			configFiles: [
				'config/**/*'
			],
			jsFiles: [
				'*.js',
				'src/**/*.js',
				'config/**/*.js'
			],
			jsTestFiles: [
				'test/**/*.js'
			]
		},
		configs = require('load-grunt-configs')(grunt, options);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig(configs);

	grunt.registerTask('pre-verify', [
		'eslint'
	]);

	grunt.registerTask('default', [
		'pre-verify',
		'lab',
		'githooks'
	]);
};
