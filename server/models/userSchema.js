const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Shema=require('./songSchema')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Recentlyplay:[
    {
      title: {
    type: String,
    required: true,
  },
  _id:{
    type:String,
    required:true
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  
  company: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  song_url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  relise_date: {
    type: Number,
    required: true,
  },

  }
],
  Playlist:[
    {title: {
      type: String,
      required: true,
    },
    _id:{
      type:String,
      required:true
    },
    artist: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    
    company: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    song_url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    relise_date: {
      type: Number,
      required: true,
    },

    }
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthtoken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.AddSong=async function(_id,title,relise_date,artist,duration,company,image_url,song_url,type){
  try {
    this.Playlist= await this.Playlist.concat({_id:_id,title:title,relise_date:relise_date,artist:artist,duration:duration,company:company,image_url:image_url,song_url:song_url,type:type})
    await this.save()
    return this.Playlist
    
  } catch (error) {
  //  console.log(error)
    
  }
}

userSchema.methods.Recentlyplayed=async function(_id,title,relise_date,artist,duration,company,image_url,song_url,type){
  try {
    this.Recentlyplay= await this.Recentlyplay.concat({_id,title,relise_date,artist,duration,company,image_url,song_url,type})
    await this.save()
   
  } catch (error) {
    console.log(error)
  }
}

const User = mongoose.model("USER", userSchema);
module.exports = User;
