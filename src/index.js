const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

setupAndStartServer();
