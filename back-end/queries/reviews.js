const db = require(`../db/dbConfig`);

//index review

const getAllReviews = async (videoGameId) => {
    try {
        const allReviews = await db.any(`SELECT * FROM reviews WHERE videoGame_id=$1`, videoGameId)
        return allReviews
    } catch (error) {
        return error

    }
}

//show a review

const getAReview = async (id) => {
    try {
        const review = await db.one(`SELECT * FROM reviews WHERE id=$1`, id)
        return review
    } catch (error) {
        return error
    }
}

//create a review

const createReview = async (reviewToAdd) => {
    try {
        const newReview = await db.one(`INSERT INTO reviews (videoGame_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [reviewToAdd.videoGame_id, reviewToAdd.reviewer, reviewToAdd.title, reviewToAdd.content, reviewToAdd.rating])
        return newReview
    } catch (error) {
        return error
    }
}

//delete review

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one(`DELETE FROM reviews WHERE id=$1 RETURNING *`, id)
        return deletedReview
    } catch (error) {
        return error
    }
}

//update review

const updateReview = async (id, review) => {
    try {
        const updatedReview = await db.one(`UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, videoGame_id=$5, WHERE id=$6 RETURNING *`, 
        [
            review.reviewer,
            review.title,
            review.content,
            review.rating,
            review.videoGame_id,
            id,
        ])
        return updatedReview
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllReviews,
    getAReview,
    createReview,
    deleteReview,
    updateReview,
    deleteReview


}