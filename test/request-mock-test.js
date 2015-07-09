'use strict';

var lab = module.exports.lab = require('lab').script(),
	Chance = require('chance').Chance,
	chance = new Chance(),
	server = require('../src'),
	helpers = require('./helpers')(server);

require('chai').should();

lab.experiment('simple request-response mocking', function () {
	lab.test('can set up a custom endpoint', function (done) {
		var endpointCreationEndpoint = '/endpoints',
			requestedEndpoint = '/custom/endpoint/' + chance.word(),
			selectedMethod = chance.pick([
				'GET',
				'POST',
				'PUT',
				'DELETE',
				'FETCH',
				'OPTIONS',
				'TRACE',
				'CONNECT'
			]),
			selectedResponseCode = chance.pick([
				200,
				201,
				203,
				301,
				302,
				400,
				401,
				403
			]),
			responseObject = chance.string(),
			customHeaderName = chance.word(),
			options = {
				method: 'POST',
				url: endpointCreationEndpoint,
				payload: {
					endpoint: requestedEndpoint,
					method: selectedMethod,
					response: {
						code: selectedResponseCode,
						headers: {
							'Content-Type': chance.word()
						},
						body: responseObject
					}
				}
			};

		options.payload.response.headers[customHeaderName] = chance.string();

		server.inject(options, function (response) {
			var newEndpointOptions = {
					method: selectedMethod,
					url: requestedEndpoint
				},
				x = function (response2) {
					response2.headers['content-type'].should.include(options.payload.response.headers['Content-Type']);
					response2.headers.should.have.property(customHeaderName);
					response2.payload.should.equal(responseObject);
					done();
				};

			response.statusCode.should.equal(201);
			helpers.assertEndpointExists(newEndpointOptions, selectedResponseCode, x);
		});
	});
});
