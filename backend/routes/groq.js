const express = require("express");

const router = express.Router();


const {
    getGameGuide
} = require(
    "../controllers/groqController"
);


/* ========================= */
/* GET GAME GUIDE */
/* ========================= */

router.get(
    "/:id",
    getGameGuide
);


module.exports = router;