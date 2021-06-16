const express = require('express')
const app = express()
const helmet = require('helmet')
let PORT = 3001;
const session = require('cookie-session');
const passport = require('passport')
// require('dotenv').config()


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(express.static('public'))
app.use(helmet());

app.set('view engine', 'ejs')

app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }
}))

app.get('/', (req, res) => {
    res.render('index')
})


app.use(passport.initialize())
app.use(passport.session())


//routes
app.use(require('./routes/index'))
app.use(require('./routes/login'))
app.use(require('./routes/registration'))
//app.use(require('./routes/comments'))





app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})