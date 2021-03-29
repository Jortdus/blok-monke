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

// Take the username to the blog page
router.get('/blog/:username', (req, res) => {
  res.render('layouts/blog', {
    username: req.params.username
  })
})

// take the urlBlog and add it to blog so you have the username
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

// Take stuff from the database and render it on readblog
router.get('/readblog', (req, res) => {
  BlogRouter.find().then(results => res.render('layouts/readblog.ejs', {
    blogBase: results,
    blog: theBlog,
  }))
})

// take the id and delete
router.post('/deleteBlog', (req, res) => {
	BlogRouter.findByIdAndDelete(req.body.deleteBlog).then(result => {
		console.log(result)
        res.redirect('/readblog')
    })
})

module.exports = router
