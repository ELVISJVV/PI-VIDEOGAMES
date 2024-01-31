require('dotenv').config();
const { API_KEY, BASE_URL } = process.env;
const axios = require('axios');
const { cleanArray, cleanArrayDatabase } = require('./utils.js');
const { Videogame, Genre } = require('../../db.js');




const getVideogames = async () => {
    const totalPages = 5; // Total number of API pages

    let games = [];

    // Using Promise.all() to make concurrent API calls
    const apiPromises = [];
    for (let i = 1; i <= totalPages; i++) {
        apiPromises.push(axios.get(`${BASE_URL}?key=${API_KEY}&page=${i}`));
    }



    try {
        const apiResponses = await Promise.all(apiPromises);
        apiResponses.forEach((response) => {
            games = [...games, ...response.data.results];
        });
    } catch (error) {
        console.error('Error getting data from API:', error);
    }

    // Get the games from the database
    const databaseVideogames = await Videogame.findAll({
        include: Genre,
    });

    const databaseVideogamesClean = cleanArrayDatabase(databaseVideogames);

    const videogames = cleanArray(games);

    return [...databaseVideogamesClean, ...videogames];
}



module.exports = {
    getVideogames
}
