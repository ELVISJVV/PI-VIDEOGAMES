const {Router} = require('express');
const genreRouter = Router();

const { genresHandler } = require('../handlers/genresHandlers.js')

genreRouter.get('/', genresHandler)




module.exports = genreRouter;
