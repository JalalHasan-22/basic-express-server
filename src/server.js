"use strict";
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const errorHandler = require("./error.handlers/500");
const notFound = require("./error.handlers/404");

// Global - Application level - middleware
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("home route");
});

// Person Route
app.get("/person", validator, (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});

function start(port) {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

app.use(errorHandler);
app.use("*", notFound);

module.exports = {
  start: start,
  app: app,
};
