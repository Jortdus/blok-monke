const mongoose = require('mongoose')
const persoonSchema = new mongoose.Schema({
    voornaam:String,
    achternaam:String,
    gamertag:String
})
module.exports = mongoose.model('persoon', persoonSchema)