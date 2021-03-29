const express = require('express');
const router = express.Router();
const Persoon = require('../model/persoon');

//Laat de juiste persoon zien uit de database
router.get('/mensen/:username', (req, res) => {
  Persoon.findOne({
    gamertag: req.params.username
  }).then(results => {
    res.render('layouts/mensen.ejs', {
      profile: results,
      likesendislikes: JSON.stringify(results)
    })
  })
})

//Haalt account op bij ID en zet daar vervolgens een like of dislike bij
router.post('/quotes', (req, res) => {
  const likeofdislike = req.body.likeofdislike
  Persoon.findByIdAndUpdate(req.body.profile, {
    $inc: {
      [likeofdislike]: 1
    }
  }).then(result => {
    res.redirect('/liked')
  })
})

//Zorgt ervoor dat het account goed word geladen. Anders staar er in de url alleen urlliked
router.post('/urlliked', (req, res) => {
  const urlProfile = req.body.urlprofile
  res.redirect('/mensen/' + urlProfile)
})

module.exports = router;
