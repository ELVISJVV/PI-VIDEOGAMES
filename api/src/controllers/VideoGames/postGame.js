const { Videogame } = require('../../db.js');


const postVideogame = async (name, description, platforms, image, released,rating,genres) => {
    

    const repeated = await Videogame.findOne({
        where: {
            name
        }
    })

    if (repeated) throw new Error('El videojuego ya existe');

    const newVideogame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        released,
        rating,
        genres,
        created: true
    })

    await newVideogame.addGenre(genres)

    // await newVideogame.addGenres(genres);
    console.log(newVideogame);
    return newVideogame;
}



module.exports = {postVideogame}