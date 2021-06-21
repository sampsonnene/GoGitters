const express = require("express");
const router = express.Router();
const db = require('../models');

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.post('/comments/new', async (req, res) => {
    try{
      let firstName = req.body.firstName;
      
      let uname = await db.users.create({firstName: firstName});


  
      let records = await db.users.findAll();
      res.json({data: records})
    }
    catch(error){
      res.send('error')
    }
})
//read a user





//delete a user



module.exports = router;