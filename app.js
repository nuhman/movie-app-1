require('dotenv').config()
const express = require('express');
const path = require('path');
const dashboardRoute = require('./routes/dashboard');
const authRoute = require('./routes/auth');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');

const app = express();

app.use('/',express.static(path.join(__dirname,"public")));
app.set('view engine', 'pug')
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));
app.use(passport.initialize())
app.use(passport.session())


app.use('/dashboard', dashboardRoute)
app.use('/auth', authRoute)

app.listen(process.env.port || 3000, () => {
    console.log('server is now running!');
})
