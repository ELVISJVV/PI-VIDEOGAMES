const videogameRouter = require('express').Router();
const { getVideogamesHandler } = require('../handlers/videogamesHandlers.js');

videogameRouter.get('/', getVideogamesHandler)


module.exports = videogameRouter;