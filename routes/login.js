const express = require('express')
const passport = require('passport')
const router = express.Router()
const db = require('../models')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')



router.get('/', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})

passport.use(new LocalStrategy( async (username, password, done)=>{
    try{
        //make db call to check user
    
        let records = await db.users.findAll({where: {username: username}})
    
    if(records != null){
        //check passwords
        let record = records[0]
        bcrypt.compare(password, record.password, (err, response) => {
            
            if(response){
                //this means a match, user has correct password
            done(null, {id: record.id, username: record.username})
            }
            else{
                //passwords didn't match 
                done(null, false)
            }
    
        })
    
        }
    
    else{
        done(null, false)
        }
    }
    
    catch(error){
    }
    
    }))
    
    
    router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    
    res.send('you made it through')
    })
    
    
    
    passport.serializeUser((user, done)=>{
    
        //passport is adding information to the sessions {id:"", username:""}
    
        done(null, user.id)
    })
    
    passport.deserializeUser(async (id, done)=>{
        try{
        let user = await db.users.findbyPk(id)
        done(null, record)
        }
    
        catch(error){
        done(null, false)
        }
    })






module.exports = router