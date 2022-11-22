"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehicle.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "type is required",
          },
          notNull: {
            msg: "type is required",
          },
        },
      },
      plat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "plat is required",
          },
          notEmpty: {
            msg: "plat is required",
          },
        },
      },
      checkinDate: DataTypes.DATE,
      checkoutDate: DataTypes.DATE,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vehicle",
    }
  );
  Vehicle.beforeCreate((el) => (el.checkinDate = new Date()));
  return Vehicle;
};
