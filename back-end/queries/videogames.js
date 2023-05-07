const db = require(`../db/dbConfig`)

//index of games
const getAllVideoGames = async () => {
    try {
        const allVideoGames = await db.any(`SELECT * FROM games`)
        return allVideoGames;
    } catch (error) {
        return error;
    }
}

//show a game

const getAVideoGame = async (id) => {
    try {
        const videoGame = await db.one(`SELECT * FROM games WHERE id=$1`, id)
        return videoGame
    } catch (error) {
        return error
    }
}

//create/add a game

const createVideoGame = async (videoGameToAdd) => {
    try {
        const newVideoGame = await db.one(`INSERT INTO games () VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [])
        return newVideoGame
    } catch (error) {
        return error
    }
}

//delete game

const deleteVideoGame = async (id) => {
    try {
        const deletedVideoGame = await db.one(`DELETE FROM games WHERE id=$1 RETURNING *`, id)
        return deletedVideoGame
    } catch (error) {
        return error
    }
}

//update game

const updateVideoGame = async (id, videogame) => {
    try {
        const updatedVideoGame = await db.one(`UPDATE games SET =$1, =$2, =$3, =$4, =$5 RETURNING *`, [])
        return updatedVideoGame
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllVideoGames,
    getAVideoGame,
    createVideoGame,
    deleteVideoGame,
    updateVideoGame
}