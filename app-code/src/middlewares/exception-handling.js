const Exceptions = require("../utils/custom-exceptions");

module.exports = async function (err, req, res, next) {
  let statusCode = 500;
  let message = "Server error";
  let name = "Server_Error";
  let errors = [];

  console.log(err);

  if (err instanceof Exceptions.HttpException) {
    if (err instanceof Exceptions.ValidationException) {
      errors = err.errors;
    }
    statusCode = err.statusCode;
    message = err.message;
    name = err.name;
  }

  res.status(statusCode).send({ message, name, errors });
};
