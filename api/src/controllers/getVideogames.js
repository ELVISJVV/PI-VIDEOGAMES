const {API_KEY, BASE_URL} = process.env;
const axios = require('axios');


const getVideogames = async () => {
    const databaseVideogames = await Videogame.findAll();

    const apiVideogames = (await axios.get(`${BASE_URL}?key=${API_KEY}`)).results;
    
    return [...databaseVideogames,apiVideogames]
}