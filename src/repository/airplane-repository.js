"use strict";
const { where } = require("sequelize");
const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane repository");
      throw error;
    }
  }

  async deleteAirplane(id) {
    try {
      const response = await Airplane.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in airplane repository");
      throw error;
    }
  }

  async updateAirplane(id, data) {
    try {
      const airplane = await Airplane.findByPk(id);
      airplane.modelNumber = data.modelNumber;
      airplane.capacity = data.capacity;
      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane repository");
      throw error;
    }
  }

  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane repository");
      throw error;
    }
  }

  async getAllAirplane() {
    try {
      const airplane = await Airplane.findAll();
      return airplane;
    } catch (error) {
      console.log("Something went wrong in airplane repository");
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
