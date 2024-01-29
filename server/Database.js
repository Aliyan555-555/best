
const mongoose=require('mongoose')

const Db =process.env.DBUR

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("connected to database");
  }).catch((error) => {
    console.log(error);
  });
 
module.exports=mongoose