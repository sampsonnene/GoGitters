const express = require("express");
const router = express.Router();
const db = require('../models');
const fetch = require("node-fetch");

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get('/article', (req, res)=>{
    let data = []
    res.render('articles',{data});
})

router.post('/article/get', async (req, res) => {
    try{
        console.log('req body', req.body);
        const {search} = req.body
    
        var url = `http://api.mediastack.com/v1/news?access_key=7c52f91ccd56d1c5475c2aeb86847dee&keywords=${search}&countries=us`
        console.log(url);

        
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                // console.log(data.data.length);
                // console.log("apidata", data);
                // console.log("it is working >>", data.data[0].title);
                //return data.data
                console.log('return data', data.data);
                res.render('articles', {
                    data: data.data
                })
            })
            .catch(error => {
                document.getElementById("error").innerHTML = "Keyword not found. Please try again!";
                console.log(" error! try again")
            })
            
            // res.render('result', {
            //     data: data.data
            //})
    }       
    catch(error){
            res.send('error')
    }
})

router.post('/article/new', async (req, res) => {

    try{
        
        const {url, title, description} = req.body
        let article = await db.articles.create({
            url: url,
            title: title,
            description: description
        })
        res.redirect('/home')
      }
      catch(error){
        res.send('error')
      }

})



module.exports = router;