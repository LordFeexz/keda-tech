const errorHandler = (err, req, res, next) => {
  // console.log(err);
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
  } else if (err.name == "failed update") {
    status = 503;
    message = "unavailable to handle this request right now";
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
