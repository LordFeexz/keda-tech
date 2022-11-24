const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

const diff = async (id) =>
  await sequelize.query(
    `select type, (v."checkoutDate" - v."checkinDate") as diff from "Vehicles" v where id = $1`,
    {
      bind: [id],
      type: QueryTypes.SELECT,
    }
  );

module.exports = diff;
