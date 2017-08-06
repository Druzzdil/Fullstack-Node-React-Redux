const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI)

//mongoose connection established

const app = express();






// app.use(express.static('public'))

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);




//import routes from routes folder
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(port, 'using port 3000')
})

