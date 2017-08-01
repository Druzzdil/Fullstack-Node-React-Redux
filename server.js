const mongoose = require('mongoose');
const express = require('express');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

const app = express();

mongoose.connect(keys.mongoURI)
//mongoose connection established

require('./routes/authRoutes')(app);

//import routes from routes folder
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(port, 'using port 3000')
})