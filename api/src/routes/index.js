const { Router } = require('express');

const  videogameRouter  = require('./videogamesRouter.js');
const  genreRouter  = require('./genresRouter.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogameRouter);
router.use('/genres', genreRouter);



module.exports = router;
