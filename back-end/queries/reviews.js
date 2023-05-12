const db = require(`../db/dbConfig`);

//index review

const getAllReviews = async (gameId) => {
    try {
        const allReviews = await db.any('SELECT * FROM reviews WHERE game_id=$1', gameId)
        return allReviews
    } catch (error) {
        return error

    }
}

//show a review

const getAReview = async (id) => {
    try {
        const review = await db.one('SELECT * FROM reviews WHERE id=$1', id)
        return review
    } catch (error) {
        return error
    }
}

//create a review

const createReview = async (reviewToAdd) => {
    try {
        const newReview = await db.one('INSERT INTO reviews (game_id, content, title, user_score reviewer) VALUES ($1, $2, $3, $4, $5) RETURNING *', [reviewToAdd.game_id, reviewToAdd.content, reviewToAdd.title, reviewToAdd.user_score, reviewToAdd.reviewer])
        return newReview
    } catch (error) {
        return error
    }
}

//delete review

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one('DELETE FROM reviews WHERE id=$1 RETURNING *', id)
        return deletedReview
    } catch (error) {
        return error
    }
}

//update review

const updateReview = async (id, review) => {
    try {
        const updatedReview = await db.one('UPDATE reviews SET reviewer=$1, title=$2, content=$3, user_score=$4, game_id=$5 WHERE id=$6 RETURNING *', 
        [
            review.reviewer,
            review.title,
            review.content,
            review.user_score,
            review.game_id,
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
};