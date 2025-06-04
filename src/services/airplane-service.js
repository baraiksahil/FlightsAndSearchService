const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const airplane = await this.airplaneRepository.createAirplane(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane service layer");
      throw error;
    }
  }

  async deleteAirplane(id) {
    try {
      const response = await this.airplaneRepository.deleteAirplane(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in airplane service layer");
      throw error;
    }
  }

  async updateAirplane(id, data) {
    try {
      const airplane = await this.airplaneRepository.updateAirplane(id, data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane service layer");
      throw error;
    }
  }

  async getAirplane(id) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane service layer");
      throw error;
    }
  }

  async getAllAirplane() {
    try {
      const airplane = await this.airplaneRepository.getAllAirplane();
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane service layer");
      throw error;
    }
  }
}

module.exports = AirplaneService;
