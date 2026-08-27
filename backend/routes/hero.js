const express = require("express");

const router = express.Router();

const {
    getHeroGames
} = require("../controllers/heroController");

router.get("/", getHeroGames);

module.exports = router;