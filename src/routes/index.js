'use strict';

module.exports = function (server) {
	server.route({
		method: 'POST',
		path: '/endpoints',
		handler: function (req, reply) {

			server.route({
				method: req.payload.method || 'GET',
				path: req.payload.endpoint,
				handler: function (subreq, resp) {

					var finalResponse = {
							body: '',
							code: 200,
							headers: {}
						},
						response,
						name;

					if (req.payload.response) {
						finalResponse.body = req.payload.response.body || '';
						finalResponse.code = req.payload.response.code || 200;
						finalResponse.headers = req.payload.response.headers || {};
					}

					response = resp(finalResponse.body)
						.code(finalResponse.code).hold();

					for (name in finalResponse.headers) {
						if (finalResponse.headers.hasOwnProperty(name)) {
							response.header(name, finalResponse.headers[name]);
						}
					}
					response.send();
				}
			});

			reply().code(201);
		}
	});
};
