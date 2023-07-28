const videogameRouter = require('express').Router();
const { getVideogamesHandler, postVideogameHandler, getVideogameByIdHandler } = require('../handlers/videogamesHandlers.js');


videogameRouter.get('/', getVideogamesHandler)
videogameRouter.post('/', postVideogameHandler)
videogameRouter.get("/:id", getVideogameByIdHandler);

module.exports = videogameRouter;