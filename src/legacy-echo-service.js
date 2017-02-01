'use strict';

// main entry point
module.exports.handler = (event, context, callback) => {

  console.log("event: " + JSON.stringify(event, null, 2));
  console.log("context: " + JSON.stringify(context, null, 2));

  var response = {
      event: event,
      context: context
  };

  console.log("response: " + JSON.stringify(response, null, 2));

  callback(null, response);
};