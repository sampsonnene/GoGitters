const express = require('express')
const app = express()
const helmet = require('helmet')
let PORT = 3000;
const cookieSession = require('cookie-session');
const passport = require('passport')
require('dotenv').config()


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(express.static('public'))
app.use(helmet());

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})


app.use(passport.initialize())
app.use(passport.session())


//routes
app.use(require('./routes/login'))
app.use(require('./routes/articles'))
app.use(require('./routes/comments'))





app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})