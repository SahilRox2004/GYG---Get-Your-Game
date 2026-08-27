const express = require("express");

const router = express.Router();

const {
    getUpcomingGames
} = require("../controllers/upcomingController");

router.get("/", getUpcomingGames);

module.exports = router;