
require('dotenv').config();
const { URL_API_GENRES, API_KEY } = process.env;
const axios = require('axios');
const { Genre } = require('../../db.js');



const getGenres = async () => {

    
    const apiGenres = (await axios.get(`${URL_API_GENRES}?key=${API_KEY}`)).data.results;

    const genresInDB = await Genre.findAll();
    
    const newGenres = apiGenres.filter((apiGenre) => {
        return !genresInDB.some((dbGenre) => dbGenre.id === apiGenre.id);
    });

    const missingGenres = genresInDB.filter((dbGenre) => {
        return !apiGenres.some((apiGenre) => apiGenre.id === dbGenre.id);
    });

    if (newGenres.length > 0) {
        const newGenres = apiGenres.map(genre => {
            return {
                id: genre.id,
                name: genre.name
            }
        })
        createGenres(newGenres);

    }
    if (missingGenres.length > 0) {
        deleteGenres(missingGenres); 
    }

    const allGenres = [...genresInDB, ...apiGenres];
    return allGenres;


}



const createGenres = async (array) => {
  
    await array.map(genre => Genre.create({
        id: genre.id,
        name: genre.name
    }
    )
    )

}

const deleteGenres = async (array) => {
    await array.map(genre => Genre.destroy({
        where: {
            id: genre.id
        }
    }
    )
    )
}


module.exports = {
    getGenres
};