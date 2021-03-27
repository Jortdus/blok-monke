const mongoose = require('mongoose')
const likesSchema = new mongoose.Schema({
  like: Number,
  dislike: Number

})

module.exports = mongoose.model('like', likesSchema)

const mongoose = require('mongoose')
const persoonSchema = new mongoose.Schema({
  foto: String,
  genre: String,
  gamertag: String
})

module.exports = mongoose.model('persoon', persoonSchema)
