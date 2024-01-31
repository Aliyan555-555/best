const dotenv=require('dotenv')
const express = require("express");
const CookieParse=require('cookie-parser')
const Cors=require('cors')
const app = express();
const path = require("path");
const PORT=process.env.PORT||5000
dotenv.config({path:'./config.env'})
// Data==base==connection-----------
require('./Database.js')
// ====end==data==base==connection
// ===router=file
app.use(express.json())
app.use(CookieParse())
const corsOptions = {
  origin: 'http://localhost:3000', // or your frontend URL
  credentials: true,
}
app.use(Cors(corsOptions))
// console.log(__dirname)
// const filePath = path.join(__dirname,"..", 'my-app', 'build', 'index.html');
// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(filePath)));
//   res.sendFile(path.resolve(filePath));
// });
app.use(express.static(path.join(__dirname, '..', 'my-app', 'build')));


// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'my-app', 'build', 'index.html'));
});
app.use(require('./Routes/auth.js'))


app.listen(PORT, () => {
  console.log("server is running");
});
