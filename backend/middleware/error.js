const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  // console.log("err", err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  //wrong mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong JWT error
  if (err.code === "jsonWebTokenError") {
    const message = `Json web token is invalid, please try again`;
    err = new ErrorHandler(message, 400);
  }
  //JWT expire error
  if (err.code === "TokenExpiredError") {
    const message = `Json web token is expired, please try again`;
    err = new ErrorHandler(message, 400);
  }

  // console.log(err.statusCode, err.message);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
