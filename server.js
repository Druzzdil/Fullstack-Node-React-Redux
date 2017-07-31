
const passport = require('passport')
const port = process.env.PORT || 5000;
const express = require('express')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


// const clientID = '1090551703725-1dqnjkb33sf0fnsf171r3k4a7hpfhjt7.apps.googleusercontent.com'
// const clientSecret = 'm5XzJGbdsYf1KZugEZVdrOt-'


passport.use(new GoogleStrategy());



app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})