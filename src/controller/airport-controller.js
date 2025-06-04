"use strict";

const { AirportService } = require("../services/index");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createCity(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the airport",
      error: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airport",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airport",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetching the airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airport",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airport = await airportService.getAllAirport(req.query);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetching all the airport",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airport",
      error: error,
    });
  }
};
module.exports = { create, destroy, update, get, getAll };
