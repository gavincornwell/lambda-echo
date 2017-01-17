'use strict';

// main entry point
module.exports.handler = (event, context, callback) => {

  console.log("event: " + JSON.stringify(event, null, 2));
  console.log("context: " + JSON.stringify(context, null, 2));

  var responseBody = {
      event: event,
      context: context
  };

  var statusCode = 200;

  if (event.httpMethod === "POST") {
    statusCode = 201;
  } else if (event.httpMethod === "DELETE") {
    statusCode = 204;
  }

  var response = {
      statusCode: statusCode,
      body: JSON.stringify(responseBody)
  };

  console.log("response: " + JSON.stringify(response));

  callback(null, response);
};