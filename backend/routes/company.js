const express = require("express");

const router =
    express.Router();



const {
    getCompany
} = require(
    "../controllers/companyController"
);



router.get(
    "/:company",
    getCompany
);



module.exports =
    router;