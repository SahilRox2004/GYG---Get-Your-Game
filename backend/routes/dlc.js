const express = require("express");

const router = express.Router();

const {
    getDLC
} = require("../controllers/dlcController");


router.get(
    "/:gameId",
    getDLC
);


module.exports = router;