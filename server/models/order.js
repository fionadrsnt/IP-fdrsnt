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
      petName: {
        type: DataTypes.STRING,
        defaultValue: "unnamed",
      },
      petType: {
        type: DataTypes.STRING,
        defaultValue: "uncategorized",
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statusOrder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      externalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  Order.beforeValidate((order) => {
    let external = new Date().getTime();
    order.externalId = `${external}`;
  });
  return Order;
};
