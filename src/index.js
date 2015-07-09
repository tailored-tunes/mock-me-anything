'use strict';

var Hapi = require('hapi'),
	server = new Hapi.Server(),
	swaggerOptions = {};

server.connection({port: 8080});

require('./routes')(server);

server.register({
	register: require('hapi-swagger'),
	options: swaggerOptions
}, function (err) {
	if (err) {
		server.log(['error'], 'hapi-swagger load error: ' + err);
	} else {
		server.log(['start'], 'hapi-swagger interface loaded');
	}
});

if (!module.parent) {
	server.start(function () {
	});
}

module.exports = server;
