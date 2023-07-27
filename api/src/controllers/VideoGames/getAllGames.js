require('dotenv').config();
const { API_KEY, BASE_URL } = process.env;
const axios = require('axios');
const { cleanArray } = require('./utils.js');
const { Videogame } = require('../../db.js');


const getVideogames = async () => {
    let games = [];
    let i = 1;
    const databaseVideogames = await Videogame.findAll();

    while (i <= 20) {
        const apiVideogames = (await axios.get(`${BASE_URL}?key=${API_KEY}&page=${i}`)).data.results;
        games = [...games, ...apiVideogames]
        i++
    }



    const videogames = cleanArray(games);

    return [...databaseVideogames, ...videogames]

}


module.exports = {
    getVideogames
}
