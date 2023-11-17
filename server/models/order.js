"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo = (models.Payment, { foreignKey: "paymentId" });
      Order.belongsTo = (models.User, { foreignKey: "userId" });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `userId is required!`,
          },
          notEmpty: {
            msg: `userId is required!`,
          },
        },
      },
      paymentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `paymentId is required!`,
          },
          notEmpty: {
            msg: `paymentId is required!`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
