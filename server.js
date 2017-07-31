
const passport = require('passport')

const keys = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express')
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },(accessToken)=>{
      console.log(accessToken)
    }
  ));


app.get('/auth/google', passport.authenticate ('google', {
      scope: ['profile', 'email']
   })
)

// secent route for callback redirection from passport auth
app.get('/auth/google/callback', passport.authenticate('google'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(port, 'using port 3000')
})