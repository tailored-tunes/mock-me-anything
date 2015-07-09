'use strict';

var Joi = require('joi');

module.exports = function (server) {
	server.route({
		config: {
			tags: ['api'],
			description: 'Create endpoints on the fly',
			validate: {
				payload: Joi.object().keys({
					endpoint: Joi.string().required(),
					method: Joi.string().optional(),
					response: Joi.object().keys({
						code: Joi.number().optional(),
						headers: Joi.object().optional().unknown().description('Key:value pair'),
						body: Joi.string().optional()
					}).unknown()
				}).unknown()
			}
		},
		method: 'POST',
		path: '/endpoints',
		handler: require('../lib/register')(server)
	});
};
