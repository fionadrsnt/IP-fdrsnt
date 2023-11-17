const { Job, User } = require("../models");

const authorization = async (req, res, next) => {
  try {
    if (req.loginInfo.role === "admin") {
      next();
    } else {
      const { userId } = req.loginInfo;
      const user = await User.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }

      // const { id } = req.params;
      // const job = await Job.findByPk(id);

      // if (!job) {
      //   throw new Error("Job not found");
      // }
      // if (user.id !== Job.authorId) {
      //   throw new Error("Forbidden");
      // }
      // next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = authorization;
