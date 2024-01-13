const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    ID: '1',
    title: 'Blog Title',
    description: 'Blog Description',
  };
  res.send(blog);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu belirtilen portta calisti: ${port}`);
});
