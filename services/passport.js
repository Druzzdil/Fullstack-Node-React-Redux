
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const User = mongoose.model('user');


// passport.serializeUser((user, done)=>{
//     done(null, user.id);
// })

// // resposible for generating cookie, id it's from mongo id record

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user =>{
//       done(null, user)
//   });
// });


// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback',
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done)=>{
//         User.findOne({
//               googleID: profile.id
//           }).then((existingUser) => {
//           if(existingUser) {
//             done(null, existingUser);
//           }
//           else {
//             new User({googleID: profile.id})
//             .save()
//             .then(user => done(null,user))
//           }
//         })
//     }
//   ));

