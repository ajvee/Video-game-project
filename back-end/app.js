const express = require("express");
const app = express();
const cors = require("cors");
const videogameControllers = require("./controllers/videogameControllers.js");
const reviewController = require('./controllers/reviewsController')


app.use(cors());
app.use(express.json());


app.use('/games', videogameControllers);
app.use('/reviews', reviewController);

// Default endpoint
app.get('/', (req, res) => {
    res.send('Games 4 You');
  });

  app.get('*', (req,res) => {
    res.status(404).send("Page not Found!");
  });

module.exports = app;
