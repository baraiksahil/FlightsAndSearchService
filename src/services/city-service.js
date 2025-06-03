"use strict";
const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the city service");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      const response = await this.cityRepository.deleteCity(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in the city service");
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      const city = await this.cityRepository.updateCity(id, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the city service");
      throw error;
    }
  }

  async getCity(id) {
    try {
      const city = await this.cityRepository.getCity(id);
      return city;
    } catch (error) {
      console.log("Something went wrong in the city service");
      throw error;
    }
  }
}

module.exports = CityService;
