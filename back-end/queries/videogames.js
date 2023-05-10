const db = require(`../db/dbConfig`)

//index of games
const getAllGames = async () => {
    try {
        const allGames = await db.any('SELECT * FROM games')
        return allGames;
    } catch (error) {
        return error;
    }
}

//show a game

const getAGame = async (id) => {
    try {
        const game = await db.one('SELECT * FROM games WHERE id=$1', id)
        return game
    } catch (error) {
        return error
    }
}

//create/add a game

const createGame = async (gameToAdd) => {
    try {
        const newGame = await db.one('INSERT INTO games (rated, title, genre, platform, release_date, game_content, score ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [gameToAdd.rated, gameToAdd.title, gameToAdd.genre, gameToAdd.platform, gameToAdd.release_date, gameToAdd.game_content, gameToAdd.score])
        return newGame
    } catch (error) {
        return error
    }
}

//delete game

const deleteGame = async (id) => {
    try {
        const deletedGame = await db.one('DELETE FROM games WHERE id=$1 RETURNING *', id)
        return deletedGame
    } catch (error) {
        return error
    }
}

//update game

const updateGame = async (id, game) => {
    try {
        const updatedGame = await db.one('UPDATE games SET rated=$1, title=$2, genre=$3, platform=$4, release_date=$5, game_content=$6, score=$7 WHERE id=$8 RETURNING *', [game.rated, game.title, game.genre, game.platform, game.release_date, game.game_content, game.score, id])
        return updatedGame
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllGames,
    getAGame,
    createGame,
    deleteGame,
    updateGame
}