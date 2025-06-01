const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();
  const PORT = process.env.PORT;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

setupAndStartServer();
