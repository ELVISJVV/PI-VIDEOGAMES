require('dotenv').config();
const { API_KEY, BASE_URL } = process.env;
const axios = require('axios');
const { cleanArray, cleanArrayDatabase } = require('./utils.js');
const { Videogame, Genre } = require('../../db.js');
const { Op } = require("sequelize");


const getVideogamesByName = async (name) => {
    let games = [];
    let databaseVideogames = await Videogame.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Genre,
    });

    let apiVideogames = (await axios.get(`${BASE_URL}?key=${API_KEY}&search=${name}`)).data.results;

    databaseVideogames = cleanArrayDatabase(databaseVideogames);

    apiVideogames = cleanArray(apiVideogames);

    games = [...databaseVideogames, ...apiVideogames];

    if (games.length === 0) throw new Error('No se encontraron coincidencias');

    return games.slice(0, 15);
}

module.exports = {
    getVideogamesByName

}