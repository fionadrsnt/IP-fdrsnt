const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let access_token = req.headers.authorization;
    // console.log(access_token);
    if (!access_token) {
      throw {
        message: "Invalid token",
      };
    }
    access_token = access_token.split(" ")[1];
    const verified = verifyToken(access_token); //process decode access_token
    const foundUser = await User.findOne({
      where: {
        email: verified.email,
      },
    });
    if (!foundUser) {
      throw {
        message: "Invalid token",
      };
    }
    req.loginInfo = {
      userId: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = authentication;
