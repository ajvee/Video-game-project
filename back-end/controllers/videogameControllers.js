const express = require('express');
const games = express.Router();
const { getAllGames, getAGame, createGame, deleteGame, updateGame } = require('../queries/videogames')
const reviewsContoller = require('./reviewsController');
games.use('/:gamesId/reviews', reviewsContoller);
// const { checkRequest, valdiateURL, checkId } = require('../validations/checkBookmarks')

games.get('/', async (req,res) => {
     const allGames = await getAllGames();

     if (allGames) {
        res.status(202).json(allGames);
     } else {
        res.status(500).json({ error: 'Server Error' })
     }
});

games.get('/:id', async (req,res) => {
    const { id } = req.params;
    const game = await getAGame(id)

    if (game) {
        res.status(200).json(game);
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route 
games.post('/', async (req, res) => {
    const newGame = req.body;
    try {
        const addedGame =  await createGame(newGame)
        res.status(202).json(addedGame)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// delete route

games.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedGame = await deleteGame(id);
        res.status(200).json(deletedGame)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

//update route 
games.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
       const updatedGame = await updateGame(id, body);
       res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ error: error});
    };
});


module.exports = games;