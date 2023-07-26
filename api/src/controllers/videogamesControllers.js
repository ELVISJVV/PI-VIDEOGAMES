const { API_KEY, BASE_URL } = process.env;
const axios = require('axios');
const {clearAraway} = require('./utils.js');


const getVideogames = async () => {


    const databaseVideogames = await Videogame.findAll();

    const apiVideogames = (await axios.get(`${BASE_URL}?key=${API_KEY}`)).results;


    apiVideogames = clearAraway(apiVideogames);
    
    return [...databaseVideogames,apiVideogames]

}


module.exports = {
    getVideogames
}
