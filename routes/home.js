const express = require("express");
const router = express.Router();
const db = require('../models');
const passport = require('passport')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get("/home", async (req, res) => {
    let article = await db.articles.findAll()
    let singleArticle = article.pop()
    
    res.render("home", {
      singleArticle,
    
    });

  });



module.exports = router;