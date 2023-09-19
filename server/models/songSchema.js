const mongoose = require("mongoose");

const Song = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  song_url:{
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
  
  type: {
    type: String,
    required: true,
  },
  relise_date: {
    type: Number,
    required: true,
  },
});

const Songs = mongoose.model("Song", Song);
module.exports = Songs;