const express = require('express');
const router = express.Router();
const Persoon = require('../model/persoon');



router.get('/mensen/:username',  (req, res ) => {
  Persoon.findOne({
    gamertag: req.params.username
  }).then(results => {
    res.render('layouts/mensen.ejs', {
      profile: results,
      likesendislikes: JSON.stringify(results)
    })
  })
})

  router.post('/quotes', (req, res) => {
   const likeofdislike = req.body.likeofdislike
   Persoon.findByIdAndUpdate(req.body.profile,{
       $inc:{[likeofdislike]:1}
   }).then(result => {
     res.redirect('/liked')
   })
})

router.post('/urlliked', (req, res) => {
  const urlProfile = req.body.urlprofile
  console.log(urlProfile)
  res.redirect('/mensen/' + urlProfile)
})

module.exports = router;
