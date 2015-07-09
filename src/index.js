'use strict';

var Hapi = require('hapi'),
	server = new Hapi.Server();

server.connection({port: 8080});

require('./routes')(server);

if (!module.parent) {
	server.start(function () {});
}

module.exports = server;
