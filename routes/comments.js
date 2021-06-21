const express = require("express");
const router = express.Router();
const db = require('../models');

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());




// GET /comments
router.get('/comments', async(req, res) => {
    //get all of our comments
    let records = await db.comments.findAll({
        include: [{model: db.user, attributes: ["firstName", "lastName"]}]
    });
    
    res.json({data: records})
  
  })
  
  // GET /comments/:id
  router.get('/comments/:id', async(req, res) => {
    let id = req.params.id; 
  
    let todo = await db.comments.findByPk(id);
  
    res.json({data: comment})
  })
  
  // POST /comments
  router.post('/comments/new', async (req, res) => {
    try{
      let comment = req.body.comment;
      let result = await db.comments.create({
          comment: comment,
          userID: req.user
        });
     

      let records = await db.comments.findAll();
      res.json({data: result})
    }
    catch(error){
      res.send('error')
    }
  
  })
  
  // PUT /comments/:id  updating
  router.put('/comments/:id', async (req, res) => {
  
    try{
      //grab the id off of the url
      let id = req.params.id;
      let description = req.body.comment;
  
      let updates = await db.comments.update({comment: description}, {where: {id: id}});
  
      let records = await db.comments.findAll();
  
      res.json({data: records})
  
    }
    catch(error){
      res.send(error)
    }
    
  })
  
  // DELETE /comments/:id
  
  router.delete('/comments/delete/:id', async (req, res) => {
      try{
          let id = req.params.id;
          let results = await db.comments.destroy({where: {id: id}})
          let records = await db.comments.findAll();
  
          res.json({data: records});
  
      }
      catch(error){
  
        res.send(error)
      }
  
  })

  module.exports = router;