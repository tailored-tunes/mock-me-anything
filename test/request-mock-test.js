'use strict';

var lab = module.exports.lab = require('lab').script(),
	Chance = require('chance').Chance,
	chance = new Chance(),
	server = require('../src'),
	helpers = require('./helpers')(server);

require('chai').should();

lab.experiment('simple request-response mocking', function () {
	var endpointCreationEndpoint = '/endpoints';

	lab.test('can set up a custom endpoint', function (done) {
		var requestedEndpoint = '/custom/endpoint/' + chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint
				}
			};

		server.inject(options, function (response) {
			var newEndpointOptions = {
					method: 'GET',
					url: requestedEndpoint
				};

			response.statusCode.should.equal(201);
			helpers.assertEndpointExists(newEndpointOptions, 200, done);
		});
	});

	lab.test('can set up a custom endpoint with a custom verb', function (done) {
		var requestedEndpoint = '/custom/endpoint/' + chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint,
					method: helpers.randomHttpVerb()
				}
			};

		server.inject(options, function (response) {
			var newEndpointOptions = {
				method: options.payload.method,
				url: requestedEndpoint
			};

			response.statusCode.should.equal(201);
			helpers.assertEndpointExists(newEndpointOptions, 200, done);
		});
	});

	lab.test('can set up a custom endpoint with a custom response code', function (done) {
		var requestedEndpoint = '/custom/endpoint/' + chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint,
					response: {
						code: helpers.randomResponseCode()
					}
				}
			};

		server.inject(options, function (response) {
			var newEndpointOptions = {
				method: 'GET',
				url: requestedEndpoint
			};

			response.statusCode.should.equal(201);
			helpers.assertEndpointExists(newEndpointOptions, options.payload.response.code, done);
		});
	});

	lab.test('can set up a custom endpoint with a custom response body', function (done) {
		var requestedEndpoint = '/custom/endpoint/' + chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint,
					response: {
						body: chance.sentence()
					}
				}
			};

		server.inject(options, function (response) {
			var newEndpointOptions = {
				method: 'GET',
				url: requestedEndpoint
			};

			response.statusCode.should.equal(201);
			helpers.assertResponseBody(newEndpointOptions, options.payload.response.body, done);
		});
	});

	lab.test('can set up a custom endpoint with custom headers', function (done) {
		var requestedEndpoint = '/custom/endpoint/' + chance.word(),
			customHeaderName = chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint,
					response: {
						headers: {
							'Content-Type': chance.word()
						}
					}
				}
			};

		options.payload.response.headers[customHeaderName] = chance.string();

		server.inject(options, function (response) {
			var newEndpointOptions = {
					method: 'GET',
					url: requestedEndpoint
				};

			response.statusCode.should.equal(201);
			helpers.assertResponseHeaders(newEndpointOptions, options.payload.response.headers, done);
		});
	});
});
