const express = require("express");

const router = express.Router();

const {

    getPlatformGames

} = require("../controllers/platformController");

router.get("/:platform",getPlatformGames);

module.exports = router;