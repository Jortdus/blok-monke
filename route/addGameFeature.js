const express = require('express')
const router = express.Router()
const Game = require('../model/game.js')

let hetSpel = {
  name: '',
  genre: ''
}

router.get('/notMonday', (req, res) => {
  res.render('layouts/notMonday.ejs')
})

router.get('/addGameFeature', (req, res) => {
  res.render('layouts/addGameFeature.ejs', {
    spel: hetSpel
  })
})



router.post('/spel', (req, res) => {
  const game = new Game(req.body)
  game.save().then(() => {
    res.redirect('addGameFeature')
  })
})

// Spullen uit de database ophalen en in profiel renderen
router.get('/addGameFeatureProfiel', (req, res) => {
  Game.find().then(results => res.render('layouts/addGameFeatureProfiel.ejs', {
    spel: results,
    game: hetSpel,
  }))
})

router.delete('/deleteGame', (req, res) => {
  Game.findByIdAndDelete(req.query.id).then(results => {
    console.log(results);
    res.send('gelukt')
  })
})

module.exports = router
