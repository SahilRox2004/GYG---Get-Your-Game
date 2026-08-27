const express = require("express");

const router = express.Router();

const {

    getSimilarGames

} = require("../controllers/similarController");

router.get("/:id", getSimilarGames);

module.exports = router;