const { Vehicle } = require("../models");

class Controller {
  static async getAll(req, res, next) {
    try {
      const vehicle = await Vehicle.findAll();

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
}

module.exports = Controller;
