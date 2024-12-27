// Create web server
const express = require('express');
const app = express();

// Create a variable to store the comments
let comments = [];

// Create a route to get the comments
app.get('/comments', (req, res) => {
  // Send the comments as a response
  res.json(comments);
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
  // Get the comment from the request
  let comment = req.body.comment;
  // Add the comment to the list of comments
  comments.push(comment);
  // Send a success response
  res.send('Comment added');
});

// Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  // Get the id from the request
  let id = req.params.id;
  // Remove the comment with the given id
  comments = comments.filter((comment, index) => index != id);
  // Send a success response
  res.send('Comment deleted');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});