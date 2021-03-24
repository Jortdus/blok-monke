const express = require('express')
const router = express.Router()
const Game = require('../model/game.js')
const scheme = require('../model/user')

let hetSpel = {
  name: '',
  genre: ''
}

router.get('/notMonday', (req, res) => {
  res.render('layouts/notMonday.ejs')
})


router.get('/addGameFeature/:username', (req, res) => {
  scheme.findOne({
    username: req.params.username
  }).then(results => {
    res.render('layouts/addGameFeature.ejs', {
        profile: results
    })
    })
})




router.post('/urlwijzig', (req, res) => {
	const urlProfile = req.body.urlprofile
	console.log(urlProfile)
	res.redirect('/addGameFeature/' + urlProfile)
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
