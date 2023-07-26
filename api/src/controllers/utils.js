
const clearArray = (array) =>
    array.map(videogame => {
        return {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            released: videogame.released,
            rating: videogame.rating,
            platforms: videogame.platforms,
            genres: videogame.genres,
            image: videogame.background_image,
            created: false

        }
    }
    )


module.exports = {
    clearArray
}