const express = require('express')
const app = express()
const helmet = require('helmet')
let PORT = 3000;
const cookieSession = require('cookie-session');
const passport = require('passport')

app.use(express.static('public'))
app.use(helmet());
// app.use(cookieSession({
//     name: 'session',
//     keys: ['lskdfjl;sj;lasjdfl;ajsld;gjasl;djflasjdflsak'], 
//     maxAge: 14 * 24  * 60 * 60 * 1000
// }))

app.set('view engine', 'ejs')

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(require('./routes/login'))





app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})