const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: String,
  title: String,
  message: String
})

module.exports = mongoose.model('blog', blogSchema)
