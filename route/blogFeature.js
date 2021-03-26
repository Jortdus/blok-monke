const express = require('express')
const router = express.Router()
const BlogRouter = require('../model/blog.js')

let theBlog = {
  name: '',
  title: '',
  message: ''
}

router.get('/notMonday', (req, res) => {
  res.render('layouts/notMonday.ejs')
})

router.get('/blog/:username', (req, res) => {
  res.render('layouts/blog', {
    username: req.params.username
  })
})

router.post('/urlblog', (req, res) => {
  const urlBlog = req.body.urlblog
  console.log(urlBlog)
  res.redirect('/blog/' + urlBlog)
})

router.get('/writeblog/:username', (req, res) => {
  res.render('layouts/writeblog.ejs', {
    blogBase: theBlog,
    username: req.params.username
  })
})

router.post('/urlblogwrite', (req, res) => {
  const urlBlogWrite = req.body.urlblogwrite
  console.log(urlBlogWrite)
  res.redirect('/writeblog/' + urlBlogWrite)
})

router.post('/blog', (req, res) => {
  const blog = new BlogRouter(req.body)
  blog.save().then(() => {
    res.redirect('readblog')
  })
})

// Spullen uit de database ophalen en in de readblog renderen
router.get('/readblog', (req, res) => {
  BlogRouter.find().then(results => res.render('layouts/readblog.ejs', {
    blogBase: results,
    blog: theBlog,
  }))
})

router.delete('/deleteGame', (req, res) => {
  BlogRouter.findByIdAndDelete(req.query.id).then(results => {
    console.log(results);
    res.send('gelukt')
  })
})

module.exports = router
