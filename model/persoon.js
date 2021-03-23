const mongoose = require('mongoose')
const persoonSchema = new mongoose.Schema({
    foto:String,
    genre:String,
    gamertag:String
})
module.exports = mongoose.model('persoon', persoonSchema)