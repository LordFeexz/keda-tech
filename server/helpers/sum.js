const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

const sum = async (type) => {
  let query = `select sum(v."price") from "Vehicles" v `;

  if (type) {
    query += `where v."type" ilike $1`;
    return await sequelize.query(query, {
      bind: [type],
      type: QueryTypes.SELECT,
    });
  } else {
    return await sequelize.query(query, { type: QueryTypes.SELECT });
  }
};

module.exports = sum;
