const mongoose = require('mongoose')
const persoonSchema = new mongoose.Schema({
  foto: String,
  genre: String,
  gamertag: String,
  like: Number,
  dislike: Number
})

module.exports = mongoose.model('persoon', persoonSchema)
