const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');


require('./models/User');
require('./services/passport');




mongoose.connect(keys.mongoURI)

//mongoose connection established

const app = express();
require('./routes/authRoutes')(app);

//import routes from routes folder
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(port, 'using port 3000')
})

