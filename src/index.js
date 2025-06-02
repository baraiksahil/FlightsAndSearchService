"use strict";

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Running on port ${PORT}`);
  });
};

setupAndStartServer();
