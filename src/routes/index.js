'use strict';

module.exports = function (server) {
	server.route({
		method: 'POST',
		path: '/endpoints',
		handler: function (req, reply) {

			server.route({
				method: req.payload.method,
				path: req.payload.endpoint,
				handler: function (subreq, resp) {
					var response = resp(req.payload.response.body)
						.code(req.payload.response.code).hold(),
						name;

					for (name in req.payload.response.headers) {
						if (req.payload.response.headers.hasOwnProperty(name)) {
							response.header(name, req.payload.response.headers[name]);
						}
					}
					response.send();
				}
			});

			reply().code(201);
		}
	});
};
