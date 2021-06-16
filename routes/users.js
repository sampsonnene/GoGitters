const express = require("express");
const router = express.Router();
const db = require('../models');

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());



//read a user





//delete a user












module.exports = router;