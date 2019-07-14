exports.failActionFunction = function (request, reply, error) {
  if (error.isBoom) {
    delete error.output.payload.validation;
    if (error.output.payload.message.indexOf("authorization") !== -1) {
      error.output.statusCode = ERROR.UNAUTHORIZED.statusCode;
      return reply(error);
    }
    var details = error.details[0];
    if (details.message.indexOf("pattern") > -1 && details.message.indexOf("required") > -1 && details.message.indexOf("fails") > -1) {
      error.output.payload.message = "Invalid " + details.path;
      return reply(error);
    }
  }
  var customErrorMessage = '';
  if (error.output.payload.message.indexOf("[") > -1) {
    customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
  } else {
    customErrorMessage = error.output.payload.message;
  }
  customErrorMessage = customErrorMessage.replace(/"/g, '');
  customErrorMessage = customErrorMessage.replace('[', '');
  customErrorMessage = customErrorMessage.replace(']', '');
  error.output.payload.message = customErrorMessage.toUpperCase();
  delete error.output.payload.validation;
  return error;
};

