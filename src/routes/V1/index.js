"use strict";

const express = require("express");
const CityController = require("../../controller/city-controller");
const AirportController = require("../../controller/airport-controller");
const AirplaneController = require("../../controller/airplane-controller");
const router = express();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);

router.post("/airplane", AirplaneController.create);
router.delete("/airplane/:id", AirplaneController.destroy);
router.patch("/airplane/:id", AirplaneController.update);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getAll);
module.exports = router;
