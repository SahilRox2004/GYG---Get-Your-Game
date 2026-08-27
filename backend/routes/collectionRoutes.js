const express =
    require("express");

const router =
    express.Router();


const {

    getCollection

} = require(
    "../controllers/collectionController"
);


router.get(
    "/:type",
    getCollection
);


module.exports =
    router;