
const { getVideogames } = require('../controllers/VideoGames/getAllGames.js');
const { postVideogame } = require('../controllers/VideoGames/postGame.js');
const { getVideogamesById } = require('../controllers/VideoGames/getGameById.js');
const { getVideogamesByName } = require('../controllers/VideoGames/getGamesByName.js');

const getVideogamesHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if (name) {
            const games = await getVideogamesByName(name);
            return res.status(200).json(games);
        }
        const videogames = await getVideogames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


const postVideogameHandler = async (req, res) => {
    try {
        const { name, description, platforms, image, released, rating, genres } = req.body;

        res.status(201).json(await postVideogame(name, description, platforms, image, released, rating, genres));

    } catch (error) {
        res.status(500).json(error.message);
    }
}


const getVideogameByIdHandler = async (req, res) => {


    try {
        const { id } = req.params;

        const source = isNaN(id) ? "bdd" : "api";

        const game = await getVideogamesById(id, source);

        res.status(200).json(game);
    } catch (error) {
        res.status(404).send(error.message);
    }


}



module.exports = {
    getVideogamesHandler,
    postVideogameHandler,
    getVideogameByIdHandler
}