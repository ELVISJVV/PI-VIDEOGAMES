const { Videogame } = require('../../db.js');


const postVideogame = async (name, description, platforms, image, released,rating,genres) => {
    

    const repeated = await Videogame.findOne({
        where: {
            name
        }
    })

    if (repeated) throw new Error('The game already exists');

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

    return newVideogame;
}



module.exports = {postVideogame}