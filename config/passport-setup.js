const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {createUser, getUserByGoogle, getUserById} = require('../database/users');
passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  getUserById(id).then(user => {
    done(null, user);
  })
})

passport.use(
  new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
      getUserByGoogle(profile.id).then(currentUser => {
        if(Object.keys(currentUser).length !== 0){
          done(null, currentUser)
        }else{
          createUser({
            googleId: profile.id,
            username: profile.displayName,
            thumbnail: profile._json.image.url
          }).then(user => {   
            done(null, user)
          }).catch(err => console.log(err))
        }  
      }).catch(err => console.log(err))  
  })
);
