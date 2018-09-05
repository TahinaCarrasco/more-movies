
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/more-movies'));

app.get('/*', function(req,res) {    
  // res.sendFile('./dist/more-movies/index.html');
  res.sendFile("/dist/more-movies/index.html", {"root": __dirname});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);