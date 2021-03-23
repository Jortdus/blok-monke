const mongoose = require('mongoose')
const likesSchema = new mongoose.Schema({
    like:Number,
    dislike:Number
 
})
module.exports = mongoose.model('like', likesSchema)