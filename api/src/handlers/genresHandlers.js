const { getGenres } = require('../controllers/genresControllers.js');


const genresHandler = async (req, res) => {

    try {
        const genres = await getGenres();

        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports ={
    genresHandler
}