const express = require("express");
const app = express();
const cors = require("cors");
// const songController = require("./controllers/songController");

app.use(cors());
app.use(express.json());