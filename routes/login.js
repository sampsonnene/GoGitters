const express = require('express')
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const db = require('../models')
const auth = require('../auth')


router.get("/login", (req, res) => {
    res.render("login");
});
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
})

router.get('/error', (req, res) => {
    
    res.send('error')
})

router.get('/test', auth, (req,res)=>{

    res.send("successsful test")
})

passport.use(new LocalStrategy({usernameField: "email"},async (username, password, done) => {
    try {
        //make a db call to check if username is in our db
        console.log("login1");
        let records = await db.user.findAll({ where: { email: username } });
        //[{},{},{},{}]
        if (records != null) {
            //check passwords
            let record = records[0];
            console.log("login2");
            bcrypt.compare(password, record.password, (err, response) => {
                if (response) {
                    //this means a match, user has correct password
                    console.log("login3");
                    done(null, { id: record.id, username: record.email })
                }
                else {
                    //passwords didn't match
                    done(null, false)
                }
            })
        }
        else {
            //user wasn't found in our db
            done(null, false)
        }
        //if user is inside db, then check if password is valid
        //done(null, {})
        //done(null, false)
    }
    catch (error) {
    }
}))
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.send('you made it through')
})

// this function is called after the LocalStrategy has authenticated a user
// user is an object : { id: record.id, username: record.username }
passport.serializeUser((user, done)=>{
    console.log('serializing user', user);
    // user.id is going to be stored on the session
    done(null, user.id)
})
// validates every authenticated request
// takes id from session and finds the user in the database
passport.deserializeUser( (id, done)=>{
    done(null, id)
})


module.exports = router;
