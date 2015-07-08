# mock-me-anything
A 3rd party service mocker

Live coding session begins 17:00 BST On the 9th of July at http://livecoding.tv/meza/

I'm going to build a service that can be used in testing environments as a configurable mock of 3rd party services.

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
