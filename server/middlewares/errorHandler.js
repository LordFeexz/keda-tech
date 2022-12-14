const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  if (err.name === `SequelizeUniqueConstraintError`) {
    status = 400;
    message = err.errors[0].message;
  } else if (err.name === `SequelizeValidationError`) {
    status = 400;
    message = err.errors[0].message;
  } else if (err.name == "Data not found") {
    status = 404;
    message = err.name;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
