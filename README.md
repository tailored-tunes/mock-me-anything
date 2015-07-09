# mock-me-anything
A 3rd party service mocker

#Running:

`npm start`

#Current feature set:

Has one and only endpoint, and the only thing it does, is to set up other, custom endpoints.

# /endpoint POST
```
{
  "endpoint": "",
  "method": "",
  "response": {
    "code": 0,
    "headers": {},
    "body": ""
  }
}
```

## Example

Say you want an endpoint that responds to a POST request with a 201, and returns some data. Then you'd pass in the
following:

```
{
  "endpoint": "/my/little/poster",
  "method": "POST",
  "response": {
    "code": 201,
    "headers": {
    	"Content-Type": "application/json"
    },
    "body": "{\"success\": true}"
  }
}
```

This will create you the specified endpoint, and will respond as told to.


#Hoping to achieve features like:

- set up mocking from the test code of the application under test
- expectations for a given URL to be called with a given response
- expectations for an OAuth flow to succeed or fail
- verifying that expectations have been met
- requesting a URL call with specific data and asserting the output to simulate incoming pushes
- multi-tenant support, so one service could support multiple developers

#Schedule:

1. Setting up the environment, tools and configurations
  - grunt
  - eslint
  - mocha
  - travis
2. Creating a simple request-response mocker
3. Creating verifyers
4. Implementing multi-tenant support
5. Creating the simple callback expectation
6. Creating oAuth shorthands

We might not get to the end of it in one session, but will continue to stream.

[Ideas and feature requests are welcome](https://github.com/tailored-tunes/mock-me-anything/issues)
