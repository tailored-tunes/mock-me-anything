'use strict';

require('chai').should();

module.exports = function (server) {

	return {
		assertEndpointExists: function (options, responseCode, done) {
			server.inject(options, function (response) {
				response.statusCode.should.equal(responseCode);
				done(response);
			});
		}
	};
};

