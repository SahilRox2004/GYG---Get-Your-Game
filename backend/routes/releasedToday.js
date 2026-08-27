const express = require("express");

const router = express.Router();

const {
    getReleasedToday
} = require("../controllers/releasedTodayController");

router.get("/", getReleasedToday);

module.exports = router;