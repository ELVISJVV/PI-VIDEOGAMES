const videogameRouter = require('express').Router();
const { getVideogamesHandler, postVideogameHandler, getVideogameByIdHandler } = require('../handlers/videogamesHandlers.js');

const prueba = (req, res) => {
    console.log('prueba');
    res.status(200).json("a");
}

// videogameRouter.get("/name", getVideogamesByNameHandler);

videogameRouter.get('/', getVideogamesHandler)
videogameRouter.post('/', postVideogameHandler)
videogameRouter.get("/:id", getVideogameByIdHandler);

module.exports = videogameRouter;