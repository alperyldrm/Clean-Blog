const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const BlogPost = mongoose.model('BlogPost', PostSchema);

module.exports = BlogPost;
