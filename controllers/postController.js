const BlogPost = require('../models/BlogPost');

exports.getAllPosts = async (req, res) => {
  const BlogPosts = await BlogPost.find({});
  res.render('index', {
    BlogPosts,
  });
};
exports.getPost = async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  res.render('post', {
    blogPost,
  });
};
exports.getCreatePost = async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
};
exports.getEditPost = async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  res.render('edit', {
    blogPost,
  });
};
exports.putUpdatePost = async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  blogPost.title = req.body.title;
  blogPost.detail = req.body.detail;
  blogPost.save();
  res.redirect(`/BlogPosts/${req.params.id}`);
};
exports.deletePost = async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
