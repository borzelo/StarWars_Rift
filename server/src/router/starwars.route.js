const express = require("express");
const StarWarsController = require("../controller/starwars.controller");

const starwarsRouter = express.Router();

starwarsRouter.get("/charachters", StarWarsController.getAllCharachters);

module.exports = starwarsRouter;
