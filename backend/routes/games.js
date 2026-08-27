const express = require("express");

const router = express.Router();


const {

    getHome,

    

    searchGames

} = require("../controllers/gamesController");


const {
    getGameDetails
} = require("../controllers/gameDetailsController");


router.get(
    "/home",
    getHome
);




router.get(
    "/game/:id",
    getGameDetails
);

router.get(
    "/search",
    searchGames
);

module.exports = router;