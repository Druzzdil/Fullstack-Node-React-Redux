const express = require('express')
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//import routes from routes folder
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(port, 'using port 3000')
})