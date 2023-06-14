const express = require("express");
const router = express.Router();
var db = require("../../dbConfig/dbConfig");

router.get("/", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    res.send(result);
  });
});

module.exports = router;
