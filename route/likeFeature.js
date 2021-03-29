const Persoon = require('../model/persoon.js')
const express = require('express')
const router = express.Router()
const scheme = require('../model/user')


// Here everything from inside the user database will be send towards the addfeature page
router.get('/addfeature/:username', (req, res) => {
	scheme.find().then(results => {
		let filterArray = results
		// this filter function makes sure that the user that is logged in will not be shown inside the results
		res.render('layouts/addFeature', {
			profile: filterArray.filter((value) => {
				return value.username !== req.params.username
			}),
			// catch the right username from the URL
			username: req.params.username
		})


	})
})

// Everything inside the added database will be send towards the liked page
router.get('/liked', (req, res) => {
	Persoon.find().then(results => res.render('layouts/liked.ejs', {
		personen: results,
	}))
})

// when the user clicks the "add" button that steam profile will be added to a new database
router.post('/liked', (req, res) => {
	const persoon = new Persoon(req.body)
	persoon.save().then(() => {
		res.redirect('/liked')
	})
})

// receive the right user profile when the user clicks "start matching" on the profile page
router.post('/urlprofile', (req, res) => {
	const urlProfile = req.body.urlprofile
	console.log(urlProfile)
	res.redirect('/addfeature/' + urlProfile)
})

// When the user clicks on "remove" the right steam profile will be deleted from the database no javascript is needed :p (PE)
router.post('/deletePersoon', (req, res) => {
	Persoon.findByIdAndDelete(req.body.deletePersoon).then(result => {
		console.log(result)
		res.redirect('/liked')
	})
})

// MVC routing to keep the server.js file as clean as possible
module.exports = router;