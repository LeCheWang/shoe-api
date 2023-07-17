require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./configs/database');
const routers = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
routers(app);

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log('show api run at port ' + port);
});
