require('dotenv').config();
const {API_KEY, BASE_URL} = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../../db.js');
const { cleanArray, cleanArrayDatabase } = require('./utils.js');

const getVideogamesById = async (id,source) => {
    const game = source === "api" ? (await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`)).data : await Videogame.findByPk(id,
         {
        include: Genre,
    }
    );
    if (!game) throw new Error(`The game doesn't exist`);
    let videogame= [game]
    
    if (source === "api" ){
        
        videogame = cleanArray(videogame)
        
    }else{
        videogame = videogame[0].dataValues
        // console.log(videogame);  
        videogame = cleanArrayDatabase([videogame])
    }



    return videogame[0];
}





module.exports = {
    getVideogamesById
}