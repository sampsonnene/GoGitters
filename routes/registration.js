const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');


router.get("/registration", (req, res) => {
    res.render('registration')
});

//form submitted
router.post('/registration', async (req, res) => {

    try {
        //get information from header 
        let { username, password, email } = req.body;

        //hash our password 
        let passwordEncrypted = bcrypt.hashSync(password, 8);

        //store username, password, email inside database

        let result = await db.users.create({
            username: username,
            password: passwordEncrypted,
            email: email,
            roleID: 2
        })

        res.redirect('/login')

    }
    catch (error) {
        res.send(error)
    }
})

module.exports = router;











module.exports = router;