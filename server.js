
const passport = require('passport')
const port = process.env.PORT || 3000;
const express = require('express')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


passport.use(new GoogleStrategy());



app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})