const express = require('express');
const router = express.Router();
const Like = require('../model/persoon');


router.get('/mensen',  (req, res ) => {
      Like.find().then(results => res.render('layouts/mensen.ejs',{
      likesendislikes: JSON.stringify(results)
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



  module.exports = router;