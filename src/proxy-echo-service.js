'use strict';

// main entry point
module.exports.handler = (event, context, callback) => {

  console.log("event: " + JSON.stringify(event, null, 2));
  console.log("context: " + JSON.stringify(context, null, 2));

  var responseBody = {
      event: event,
      context: context
  };

  // look for a status code on the request
  var statusCode = null;
  if (event.queryStringParameters) {
    statusCode = event.queryStringParameters.statusCode;
  }

  if (statusCode) {
    // if a status code has been provided use it, unless it's not a number!
    if (isNaN(statusCode)) {
      statusCode = 200;
    }
  } else {
    statusCode = 200;

    // change default status code depending on method
    if (event.httpMethod === "POST") {
      statusCode = 201;
    } else if (event.httpMethod === "DELETE") {
      statusCode = 204;
    }
  }

  var response = {
      statusCode: statusCode,
      body: JSON.stringify(responseBody)
  };

  console.log("response: " + JSON.stringify(response));

  callback(null, response);
};