
require('dotenv').config();
const { URL_API_GENRES, API_KEY } = process.env;
const axios = require('axios');
const { Genre } = require('../../db.js');



const getGenres = async () => {

    const apiGenres = (await axios.get(`${URL_API_GENRES}?key=${API_KEY}`)).data.results;


    const newGenres = apiGenres.map(genre => {
        return {
            id: genre.id,
            name: genre.name
        }
    })

    createGenres(newGenres);

    const dbGenres = await Genre.findAll();

    return dbGenres;


}



const createGenres = async (array) => {

    await array.map(genre => Genre.findOrCreate({
        where: {
            id: genre.id,
            name: genre.name
        }
    })
    )

}




module.exports = {
    getGenres
};