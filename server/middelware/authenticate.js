const  jwd=require('jsonwebtoken')

const  User =require('../models/userSchema')
const Authenticate=async (req,res,next)=>{
    try {
        
        const token=req.cookies.jwtoken;
        const varify=jwd.verify(token,process.env.JWT_SECRET)
        const  rootuser=await User.findOne({_id:varify._id,"tokens.token":token})
        if (!rootuser) {
           throw new Error("User not found")
        }
        req.rootUser=rootuser
        req.token=token
        req.UserId=rootuser._id
        req.Recentlyplayed=rootuser.Recentlyplay
        req.UserPlaylist=rootuser.Playlist
        req.OrgPlaylist=rootuser.OrgPlaylist
        req.OrgPlaylistTitle=rootuser.OrgPlaylist.map((data)=>data.title)
        next()
    } catch (error) {
        res.status(400).send('Unauthorized:no token provided')
       
    }
    next()
}
module.exports=Authenticate