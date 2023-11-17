const errorHandler = (err, req, res, next) => {
  // console.log(err);
  let status = 500;
  let message = "Internal Server Error";

  if (err.message === "error not found") {
    status = 404;
    message = "error not found";
  }
  if (err.message === "User not found") {
    status = 404;
    message = "User not found";
  }
  if (err.message === "Data not found") {
    status = 404;
    message = "Data not found";
  }
  if (err.message === "Forbidden") {
    status = 403;
    message = "You don't have permission";
  }
  if (err.message === "LoginError") {
    status = 401;
    message = "Username/Password salah";
  }
  if (err.message === "Invalid email/password") {
    status = 401;
    message = "Invalid email/password";
  }
  if (err.message === "Invalid token") {
    status = 401;
    message = "Invalid token";
  }
  if (err.name === "SequelizeValidationError") {
    status = 400;
    message = err.errors[0].message;
  }
  if (err.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = err.errors[0].message;
  }
  if (err.name === "JsonWebTokenError") {
    status = 401;
    message = "Invalid Signature";
  }
  if (err.name === "SequelizeDatabaseError") {
    status = 400;
    message = "Invalid data type";
  }
  if (err.message === "Email is required!") {
    status = 400;
    message = "Email is required!";
  }
  if (err.message === "Password is required!") {
    status = 400;
    message = "Password is required!";
  }

  res.status(status).json({
    message,
  });
};

module.exports = errorHandler;
