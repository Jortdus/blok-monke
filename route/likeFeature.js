const Persoon = require('../model/persoon.js')
const express = require('express')
const router = express.Router()
const scheme = require('../model/user')

router.get('/addfeature/:username', (req, res) => {
  scheme.find().then(results => {
      res.render('layouts/addFeature', {
		  profile: results,
		  username: req.params.username
      })
  })
})


// Hier wordt alles uit de database gehaald zodat het op de /liked pagina weergegeven kan worden.
router.get('/liked', (req, res) => {
  Persoon.find().then(results => res.render('layouts/liked.ejs', {
    personen: results,
    
  }))
})
// als er op de submit button word geklikt worden de geselecteerde personen naar de database gestuurd.
router.post('/liked', (req, res) => {
  const persoon = new Persoon(req.body)
  persoon.save().then(() => {
    res.redirect('/liked')
  })

})

router.post('/urlprofile', (req, res) => {
	const urlProfile = req.body.urlprofile
	console.log(urlProfile)
	res.redirect('/addfeature/' + urlProfile)
  })



router.post('/deletePersoon', (req, res) => {
    Persoon.findByIdAndDelete(req.body.deletePersoon).then(result => {
      console.log(result)
    res.redirect('/liked')
  })
})

module.exports = router;
