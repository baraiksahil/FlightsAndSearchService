"use strict";

const { Airport } = require("../models/index");
const { Op } = require("sequelize");

class AirportRepository {
  async createAirport(name, address, cityId) {
    try {
      const airport = await Airport.create(name, address, cityId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository");
      throw error;
    }
  }

  async deleteAirport(id) {
    try {
      await Airport.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in airport repository");
      throw error;
    }
  }

  async updateAirport(id, data) {
    try {
      const airport = await Airport.findByPk(id);
      airport.name = data.name;
      airport.address = data.address;
      airport.cityId = data.cityId;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository");
      throw error;
    }
  }

  async getAirport(id) {
    try {
      const airport = await Airport.findByPk(id);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository");
      throw error;
    }
  }

  async getAllAirport(filter) {
    try {
      if (filter) {
        const airport = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airport;
      }
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository");
      throw error;
    }
  }
}

module.exports = AirportRepository;
