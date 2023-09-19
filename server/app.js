const dotenv=require('dotenv')
const express = require("express");
const CookieParse=require('cookie-parser')
const app = express();
const PORT=process.env.PORT||5000
dotenv.config({path:'./config.env'})
// Data==base==connection-----------
require('./Database')
// ====end==data==base==connection
// ===router=file
app.use(express.json())
app.use(CookieParse())
app.use(require('./Routes/auth.js'))


app.listen(PORT, () => {
  console.log("server is running");
});
