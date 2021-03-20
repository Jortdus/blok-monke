const Persoon = require('../model/persoon.js')
const express = require('express')
const router = express.Router()


let persoon = {
  voornaam: 'Fabian', achternaam:'Vis', liked:[]
}

router.get('/addFeature', (req, res) => {
    res.render('layouts/addFeature.ejs', {profiel:persoon})
  })

  // Hier wordt alles uit de database gehaald zodat het op de /liked pagina weergegeven kan worden.
  router.get('/liked', (req, res) => {
    Persoon.find().then(results =>  res.render('layouts/liked.ejs', 
    {
        personen: results,
        profiel: persoon,
    }))
  })
  // als er op de submit button word geklikt worden de geselecteerde personen naar de database gestuurd.
  router.post('/liked', (req, res) => {
    const persoon = new Persoon(req.body)
    persoon.save().then( () => {
      res.redirect('/liked')
    })

})

router.delete('/delete', (req, res) => {
    Persoon.findByIdAndDelete(req.query.id).then(result => {
    console.log(result)
    
    res.send('Gelukt')
    })
})

module.exports = router;