"use strict";

const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }
  async createCity(data) {
    try {
      const airport = await this.airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport service layer");
      throw error;
    }
  }
  async deleteAirport(id) {
    try {
      const response = await this.airportRepository.deleteAirport(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in airport service layer");
      throw error;
    }
  }

  async updateAirport(id, data) {
    try {
      const airport = await this.airportRepository.updateAirport(id, data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport service layer");
      throw error;
    }
  }

  async getAirport(id) {
    try {
      const airport = await this.airportRepository.getAirport(id);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport service layer");
      throw error;
    }
  }

  async getAllAirport(filter) {
    try {
      if (!filter || !filter.name) {
        return await this.airportRepository.getAllAirport(null);
      }
      const airport = await this.airportRepository.getAllAirport({
        name: filter.name,
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport service layer");
      throw error;
    }
  }
}

module.exports = AirportService;
