const express = require("express");
const router = express.Router();
const visualizeController = require("../controllers/visualizeController");

router.post("/", visualizeController.generateCharts);

module.exports = router;
