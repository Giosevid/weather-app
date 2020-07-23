const express = require("express");
const LocationController = require("../controllers/location");
const CurrentController = require("../controllers/current");
const ForecastController = require("../controllers/forecast");

const api = express.Router();

api.get("/location", LocationController.location);
api.get("/current/:city?", CurrentController.current);
api.get("/forecast/:city?", ForecastController.forecast);

module.exports = api;