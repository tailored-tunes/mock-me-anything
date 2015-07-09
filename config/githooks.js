'use strict';

module.exports = function () {
	return {
		app: {
			'pre-commit': 'pre-verify',
			'post-merge': {
				command: 'npm install'
			},
			'pre-push': 'default'
		}
	};
};
