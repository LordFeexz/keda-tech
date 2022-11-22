const { Vehicle, sequelize } = require("../models");
const { QueryTypes, Op } = require("sequelize");
const priceAdjuster = require("../helpers/price");

class Controller {
  static async getAll(req, res, next) {
    try {
      const { type, checkinDate, checkoutDate, minPrice, maxPrice } = req.body;

      let option = {};
      option.where = {};

      if (type) {
        option.where.type = {
          [Op.iLike]: `%${type}%`,
        };
      }

      // if (checkinDate) {
      //   option.where = {
      //     from: {
      //       $between: [checkinDate, checkoutDate],
      //     },
      //   };
      // }
      const vehicle = await Vehicle.findAll(option);

      if (!vehicle || vehicle.length <= 0) throw { name: "Data not found" };

      res.status(200).json(vehicle);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const vehicle = await Vehicle.findOne({ where: { id } });

      if (!vehicle) throw { name: "Data not found" };

      res.status(200).json(vehicle);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { type, plat } = req.body;

      await Vehicle.create({
        type,
        plat,
      });

      res.status(201).json({ message: "success checkin" });
    } catch (err) {
      next(err);
    }
  }

  static async checkout(req, res, next) {
    try {
      const { id } = req.params;

      await Vehicle.update(
        { checkoutDate: new Date(), status: "done" },
        { where: { id } }
      );

      const diff = await sequelize.query(
        `select *, (v."checkoutDate" - v."checkinDate") as diff from "Vehicles" v where id = $1`,
        {
          bind: [id],
          type: QueryTypes.SELECT,
        }
      );

      const { type } = diff[0];

      const minutes = diff[0].diff.minutes;
      const hours = diff[0].diff.hours;
      const days = diff[0].diff.days;

      const price = priceAdjuster(days, hours, minutes, type);

      await Vehicle.update({ price }, { where: { id } });

      res.status(200).json({ message: "success checkout" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
