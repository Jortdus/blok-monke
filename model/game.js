const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  name: String,
  genre: String
})

module.exports = mongoose.model('game', gameSchema)
