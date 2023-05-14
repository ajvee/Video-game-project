const express = require('express');
const reviews = express.Router({mergeParams: true});
const { getAllReviews, getAReview, createReview, deleteReview, updateReview } = require('../queries/reviews')

// index route
reviews.get("/", async (req, res) => {
    const { gameId } = req.params;
    try{
        const allReviews = await getAllReviews(gameId)
        res.json(allReviews)
    }catch (err) {
        res.json(err)
    }
  });
// show route
reviews.get('/:id', async (req, res) => {
    const { id } = req.params;
    const review = getAReview(id);
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(500).json({ error: 'Server Error'});
    };
});
// create route
reviews.post('/',  async (req, res) => {
    try {
        const addedReview = await createReview(req.body)
        res.status(200).json(addedReview)
    } catch (error) {
        res.status(400).json({ error: error})
    }
})
// delete route
reviews.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await deleteReview(id);
        res.status(200).json(deletedReview)
    } catch (error) {
        res.status(400).json({ error: error})
    }
});
// update route
reviews.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    if (updatedReview.id) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json("Review not found");
    }
  });

module.exports = reviews;