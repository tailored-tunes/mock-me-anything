'use strict';

var Chance = require('chance').Chance,
	chance = new Chance();

require('chai').should();

module.exports = function (server) {

	return {
		assertEndpointExists: function (options, responseCode, done) {
			server.inject(options, function (response) {
				response.statusCode.should.equal(responseCode);
				done();
			});
		},
		assertResponseBody: function (options, responseBody, done) {
			server.inject(options, function (response) {
				response.payload.should.equal(responseBody);
				done();
			});
		},
		assertResponseHeaders: function (options, responseHeaders, done) {
			server.inject(options, function (response) {
				var lowercaseKeys = Object.keys(responseHeaders).map(function (k) {
					return k.toLowerCase();
				});

				response.headers.should.contain.all.keys(lowercaseKeys);
				done();
			});
		},
		randomResponseCode: function () {
			return chance.pick([
				200,
				201,
				203,
				301,
				302,
				400,
				401,
				403
			]);
		},
		randomHttpVerb: function () {
			return chance.pick([
				'GET',
				'POST',
				'PUT',
				'DELETE',
				'FETCH',
				'OPTIONS',
				'TRACE',
				'CONNECT'
			]);
		}
	};
};

