
const { getVideogames } = require('../controllers/VideoGames/getAllGames.js');
const {postVideogame} = require('../controllers/VideoGames/postGame.js');


const getVideogamesHandler = async (req, res) => {
    try {
        const videogames = await getVideogames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


const postVideogameHandler = async (req, res) => {
    try {
        const { name, description, platforms, image, released,rating,genres } = req.body;

        res.status(201).json(await postVideogame(name, description, platforms, image, released,rating,genres));

    } catch (error) {
        res.status(500).json(error.message);
    }
}




module.exports = {
    getVideogamesHandler,
    postVideogameHandler

}