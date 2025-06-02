"use strict";
const { City } = require("../models");

class CityRepository {
  async createCity(names) {
    try {
      const city = await City.create(names);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      return await City.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: id,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async getCity(id) {
    try {
      const city = await City.findByPk(id);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = CityRepository;
