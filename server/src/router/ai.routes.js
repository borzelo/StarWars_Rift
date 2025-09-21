const express = require("express");
const AiController = require("../controller/ai.controller");

const aiRouter = express.Router();

aiRouter.post("/answer", AiController.getAnswer);

module.exports = aiRouter;
