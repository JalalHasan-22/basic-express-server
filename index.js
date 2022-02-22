"use strict";
const server = require("./src/server");
require("dotenv").config();
const { start, app } = require("./src/server");

start(process.env.PORT || 3001);
