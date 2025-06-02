"use strict";
const { log } = require("console");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log(process.env.PORT);

module.exports = {
  PORT: process.env.PORT,
};
