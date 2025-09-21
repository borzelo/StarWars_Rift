const express = require("express");
const morgan = require("morgan");
const starwarsRouter = require("./router/starwars.route");
const aiRouter = require("./router/ai.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/starwars", starwarsRouter);
app.use("/api/ai", aiRouter);

module.exports = app;
