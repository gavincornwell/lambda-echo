'use strict';

// main entry point
module.exports.handler = (event, context, callback) => {

  console.log("event: " + JSON.stringify(event, null, 2));
  console.log("context: " + JSON.stringify(context, null, 2));

  var responseBody = {
      event: event,
      context: context
  };

  var response = {
      statusCode: 200,
      body: JSON.stringify(responseBody)
  };

  console.log("response: " + JSON.stringify(response));

  callback(null, response);
};