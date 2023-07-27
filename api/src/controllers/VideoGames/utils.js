
const cleanArray = (array) =>
    array.map(videogame => {
        return {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            released: videogame.released,
            rating: videogame.rating,
            platforms: videogame.platforms.map(platform => platform.platform.name),
            genres: videogame.genres.map(genre => genre.name),
            image: videogame.background_image,
            created: false

        }
    }
    )


module.exports = {
    cleanArray
}