require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000
const connectDB = require('./model/db.js')
// const SteamAPI = require('steamapi');
// const steam = new SteamAPI(process.env.STEAMAPI);
const User = require("./model/user.js")
const steamFetch = require("./route/steamFetch.js")
const profile = require("./route/profile.js")
const likeFeature = require("./route/likeFeature")
const addGameFeature = require("./route/blogFeature")
const likingFeature = require('./route/liking.js')
const login = require("./route/login.js")


// call on db connection module
connectDB();

app.use(bodyParser.urlencoded({
  extended: true
}))

// sets views folder
app.set('views', __dirname + '/views')

// static directory designation
app.use('/static', express.static(__dirname + '/static'))

// view engine designation
app.set('view engine', 'ejs')

// rendering
app.use(steamFetch)
app.use(profile)
app.use(likeFeature)
app.use(addGameFeature)
app.use(likingFeature)
app.use(login)

// 404 error handling
app.use(function(req, res, next) {
  res.status(404).render('layouts/error.ejs')
})

app.listen(port, () => {
  console.log('Server is running!', port)
})
