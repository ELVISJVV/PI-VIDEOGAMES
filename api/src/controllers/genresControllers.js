
require('dotenv').config();
const { URL_API_GENRES, API_KEY } = process.env;
const axios = require('axios');
const { Genre } = require('../db.js');



const getGenres = async () => {
    console.log(URL_API_GENRES);
    let apiGenres = (await axios.get(`${URL_API_GENRES}?key=${API_KEY}`)).data.results;

    // console.log(apiGenres);

    apiGenres = apiGenres.map(genre => {
        return {
            id: genre.id,
            name: genre.name
        }
    }
    )


    createGeneres(apiGenres);
    return apiGenres;


}


const createGeneres = async (array) => {

    await array.map(genre =>  Genre.create({
        id: genre.id,
        name: genre.name
    }
        )
    )


    
        
}



module.exports = {
    getGenres
};