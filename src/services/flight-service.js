"use strict";
const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error: "Arrival time cannot be less than departure time",
        };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in flight service");
      throw error;
    }
  }
}

module.exports = FlightService;

/**
 *
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * boradingGate
 * totalSeats -> airplane
 */
