require("dotenv").config()
const { URL, KEY } = process.env;
const Axios = require('axios');

async function GameID(gameid) {
    try{
        const { data } = await Axios.get(`${URL}/games/${gameid}?key=${KEY}`)
        const {id, name, description, released, background_image, rating, parent_platforms, genres} = data
        let platformNames = platforms.map((e) => e.platform.name)
        let genresNames = genres.map((e) => e.name)
        return (
            {
                id: id,
                name: name,
                background_image: background_image,
                platforms: platformNames,
                description: description,
                released: released,
                rating: rating,
                genres: genresNames
            }
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = GameID