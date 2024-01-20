const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const BlogPost = require('./models/BlogPost');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/clean-blog-db');

//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',
{
  methods:['POST', 'GET']
}));

//ROUTES
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/', postController.getAllPosts);
app.get('/BlogPosts/:id', postController.getPost);
app.post('/BlogPosts', postController.getCreatePost);
app.get('/BlogPosts/edit/:id', postController.getEditPost);
app.put('/BlogPosts/:id', postController.putUpdatePost);
app.delete('/BlogPosts/:id', postController.deletePost);

//PORT
const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu belirtilen portta calisti: ${port}`);
});
