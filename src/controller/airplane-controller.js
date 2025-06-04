"use strict";
const { AirplaneService } = require("../services/index");
const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully created airplane",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create airplane",
      error: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airplaneService.deleteAirplane(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted airplane",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete airplane",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully updated airplane",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update airplane",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetching airplane",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airplane",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplane = await airplaneService.getAllAirplane();
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetching airplane",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airplane",
      error: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
