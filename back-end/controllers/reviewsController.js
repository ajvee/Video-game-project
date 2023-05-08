const express = require('express');
// const review = express.Router();
// const { getBookmark } = require('../queries/bookmarks')
const review = express.Router({ mergeParams: true });
const { 
    getAllReviews, 
    getAReview, 
    createReview, 
    deleteReview, 
    updateReview 
} = require('../queries/reviews')

review.get('/', async (req,res) => {
    const { bookmarkId } = req.params;
     try {
        const allReviews = await getAllReviews(bookmarkId);
        res.json(allReviews)
     } catch (err) {
        res.json(err)
     }
     
});

review.get('/:id', async (req,res) => {
    const { id } = req.params;
    const review = await getAReview(id)

    if (review) {
        res.status(200).json(review);
    } else {
        res.status(500).json({ error: 'Server Error'})
    }
})

// create route 
review.post('/', async (req, res) => {
    const newReview = req.body;
    try {
        const addedReview =  await createReview(newReview)
        res.status(202).json(addedReview)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// delete route

review.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedReview = await deleteReview(id);
        res.status(200).json(deletedReview)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

//update route 
review.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
       const updatedReview = await updateReview(id, body);
       res.status(200).json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error});
    };
});

module.exports = review;