const express = require("express");
const router = express.Router();
const { getUpdates } = require("../controllers/updatesController");

router.get("/", getUpdates);

module.exports = router;
