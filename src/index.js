"use strict";

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const db = require("./models/index");

const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    try {
      console.log(`Running on port ${PORT}`);
      if (process.env.SYNC_DB) {
        db.sequelize.sync({ alter: true });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

setupAndStartServer();
