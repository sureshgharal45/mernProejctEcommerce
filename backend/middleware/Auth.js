const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// const secretKey = process.env.JWT_SECRET;

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

    // console.log("token", token);
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  // console.log('decodedData', decodedData);
  req.user = await User.findById(decodedData.id);
  // console.log("req.user.role",req.user);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // console.log("req.user.role",req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resourse`,
          403
        )
      );
    }
    next();
  };
};
