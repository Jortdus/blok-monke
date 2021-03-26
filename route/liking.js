const express = require('express');
const router = express.Router();
const Like = require('../model/persoon');


router.get('/mensen/:username',  (req, res ) => {
  Like.findOne({
    gamertag: req.params.username
  }).then(results => {
    res.render('layouts/mensen.ejs', {
        profile: results,
        likesendislikes: JSON.stringify(results)
    })
    })
  })




  router.post('/quotes', (req, res) => {
    const radio = req.body.radio
    const likes = new Like({
      like: radio == 1 ? 1 : 0,
      dislike: radio == 2 ? 1 : 0
    })
    likes.save().then( () => {
      res.redirect('/')

    })

})

router.post('/urlliked', (req, res) => {
	const urlProfile = req.body.urlprofile
	console.log(urlProfile)
	res.redirect('/mensen/' + urlProfile)
  })



  module.exports = router;