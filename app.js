const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const BlogPost = require('./models/BlogPost');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/clean-blog-db')

//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const BlogPosts = await BlogPost.find({})
  res.render('index', {
    BlogPosts
  });
});
app.get('/BlogPosts/:id', async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  res.render('post', {
    blogPost
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/BlogPosts', async(req, res) => {
  await BlogPost.create(req.body)
  res.redirect('/')
});

//PORT
const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu belirtilen portta calisti: ${port}`);
});
