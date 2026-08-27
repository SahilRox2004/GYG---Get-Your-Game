const express = require("express");

const router = express.Router();

const {

    searchGames

} = require("../controllers/searchController");

router.get("/:query", searchGames);

module.exports = router;