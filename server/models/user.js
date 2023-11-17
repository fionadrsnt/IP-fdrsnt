"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne = (models.Order, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `fullName is required!`,
          },
          notEmpty: {
            msg: `fullName is required!`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: `Email is required!`,
          },
          notEmpty: {
            msg: `Email is required!`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Password is required!`,
          },
          notEmpty: {
            msg: `Password is required!`,
          },
        },
      },
      role: DataTypes.STRING,
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Address is required!`,
          },
          notEmpty: {
            msg: `Address is required!`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  //! HOOKS
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
    user.role = "user";
    // return user;
  });
  return User;
};
