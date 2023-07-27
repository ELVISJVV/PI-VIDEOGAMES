const videogameRouter = require('express').Router();
const { getVideogamesHandler, postVideogameHandler } = require('../handlers/videogamesHandlers.js');


videogameRouter.get('/', getVideogamesHandler)
videogameRouter.post('/', postVideogameHandler)

module.exports = videogameRouter;