const { Videogame } = require('../db');

async function createVideogame (FormData) {
    try{
        const {name, platforms, description, background_image, released, rating, genres} = FormData;

        const platforms_format = platforms.map((x) => {return {platform: x}})

        const [Game, Created] = await Videogame.findOrCreate({
            where: {name: name},
            defaults: {platforms: platforms_format, description, background_image, released, rating}})
        if (Created) {
            genres.map(async (e) => {
                await Game.addGenres(e.id)
            })
            return Game
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {createVideogame}