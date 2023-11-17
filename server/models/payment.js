"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.hasOne = (models.Order, { foreignKey: "paymentId" });
    }
  }
  Payment.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Amount is required!`,
          },
          notEmpty: {
            msg: `Amount is required!`,
          },
        },
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Provider is required!`,
          },
          notEmpty: {
            msg: `Provider is required!`,
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Status is required!`,
          },
          notEmpty: {
            msg: `Status is required!`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
