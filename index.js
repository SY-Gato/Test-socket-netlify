const helloHandler = require('./netlify/functions/hello')

exports.handler = async (event, context) => {
  const path = event.path;
  if (path === "/.netlify/functions/hello") {
    return helloHandler.hello(event, context);
  }
  return {
    statusCode: 404,
    body: 'Not Found'
  };
};