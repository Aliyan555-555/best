const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const Authenticate=require('../middelware/authenticate')
require("../Database");
const User = require("../models/userSchema");
const Song=require("../models/songSchema")

// ==========registration=============section===================
router.post("/registor", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "some error occured" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "user already exist" });
    }
    const newUser = new User({ name: name, email: email, password: password });
    await newUser.save();
    res.status(201).json({ message: "user registor successfuly" });
  } catch (error) {
    console.log(error);
  }
});

// ===========login============section====================
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "some error occured" });
    }
    const userLogin =await User.findOne({ email: email });
   
    if (userLogin) { 
        const match = await bcrypt.compare(password, userLogin.password);
        const token= await userLogin.generateAuthtoken()
        
        res.cookie("jwtoken",token,{
          httpOnly:true,
          expires: new Date(Date.now() + 25892000000)
        })
      
        if (!match) {
         res.status(400).json({ error: "invelide Properte " });
        } else {
        res.json({ message: "user login successfully" });
        }
    } else {
      res.status(400).json({ error: "invelide Properte " });
    }


  } catch (error) {
    console.log(error);
  }
});

// ===========logout============section====================

router.get('/home',Authenticate,(req,res)=>{
  res.send(req.rootUser)
})
// ===========Test======Cookie============store
// router.get("/test",(req,res)=>{
//    res.cookie("helo",'token',{
//           httpOnly:true,
//           secure: true,
//           expires: new Date(Date.now() + 25892000000)
//         }).send("Cookie-set")
//         console.log(req.cookies.helo)
        

// })
router.get('/logout',(req,res)=>{
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('User-logout')
})
router.get("/api/v1/song",(req,res)=>{
  Song.find({}).then((songs)=>{
    res.send(songs)
  })

})


router.post("/addsong",Authenticate,async(req,res)=>{
 try {
   const {_id,title,relise_date,artist,duration,company,image_url,song_url,type}=req.body;
   
  if(!req.UserPlaylist.filter((element) => element._id ==_id).length>0){
    console.log('song-not-add')
 
   const FindUser=await User.findOne({_id:req.UserId})
   if (FindUser){

     const usersong=await FindUser.AddSong(_id,title,relise_date,artist,duration,company,image_url,song_url,type)
     res.status(201).json({message:"add-song"})
    await FindUser.save()
   } 
  }
 } catch (error) {
  // console.log(error)

 }


})


router.post("/Recentlyplayed",Authenticate,async(req,res)=>{
 try {
   const {_id,title,relise_date,artist,duration,company,image_url,song_url,type}=req.body;
 
  // if(!req.Recentlyplayed.filter((element) => element._id ==_id).length>0){
    console.log('song-not-add')
   const FindUser=await User.findOne({_id:req.UserId})
   if (FindUser){
     const usersong=await FindUser.Recentlyplayed(_id,title,relise_date,artist,duration,company,image_url,song_url,type)
     res.status(201).json({message:"add-song"})
    await FindUser.save()
   } 
  // }
 } catch (error) {
  console.log(error)

 }


})


router.get('/api/v1/Recent',Authenticate,(req,res)=>{
  res.send(req.Recentlyplayed)
 

})
router.get('/api/v1/Playlist',Authenticate,(req,res)=>{
  res.send(req.UserPlaylist)
})

module.exports = router;
