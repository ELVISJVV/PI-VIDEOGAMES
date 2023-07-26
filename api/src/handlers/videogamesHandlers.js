
const { getVideogames } = require('../controllers/videogamesControllers.js');


const getVideogamesHandler = async (req, res) => {
    try {
        const videogames = await getVideogames();
        res.status(200).json(videogames);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


module.exports = {
    getVideogamesHandler

}