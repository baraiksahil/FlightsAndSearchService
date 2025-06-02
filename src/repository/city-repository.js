"use strict";
const { City } = require("../models");

class CityRepository {
  async createCity({ names }) {
    try {
      const city = await City.create({ names });
      return city;
    } catch (error) {
      throw error;
    }
  }

  async deleteCity({ id }) {
    try {
      await City.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
