require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require("../model/user.js")
const SteamAPI = require('steamapi');
const steam = new SteamAPI(process.env.STEAMAPI);

let now = new Date();
let day = 1; // er staat nu 1, maar dit moet now.getDay() worden om de dag te checken

console.log(day);

router.get('/', (req, res) => {
  if (day == 1) {
    const {
      error
    } = req.query
    if (error && error === 'No match') {
      res.render('layouts/index', {
        message: 'User not found'
      })
      return
    }
    res.render('layouts/index', {
      message: ''
    })
  } else {
    res.render('layouts/notMonday.ejs')
  }
})

router.post('/login', (req, res) => {
  const {
    id: steamUser
  } = req.body
  const gameGenre = req.body.gameGenre
  User.findOne({
    username: steamUser
  }).then(result => {
    if (!result) {
      steam.resolve(steamUser).then(id => {
        steam.getUserSummary(id).then(userSummary => {
          new User({
              username: steamUser,
              steamID: userSummary.steamID,
              country: userSummary.countryCode || steamUser + ' has decided to not share this information',
              profilePicture: userSummary.avatar.medium,
              gameGenre: gameGenre
            })
            .save()
            .then(result =>
              res.redirect('/profile/' + result.username)
            )
        })
      }).catch(err => {
        res.redirect('/?error=' + err.message)
      })
      return
    }
    res.redirect('/profile/' + result.username)
  })
})

module.exports = router;
