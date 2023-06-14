const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

var db = require("./dbConfig/dbConfig");
const playerRoute = require("./src/routes/playerRoute");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/player", playerRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
