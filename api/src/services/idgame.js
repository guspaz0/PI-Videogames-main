require("dotenv").config()
const { URL, KEY } = process.env;
const Axios = require('axios');

async function GameID(gameid) {
    try{
        const { data } = await Axios.get(`${URL}/games/${gameid}?key=${KEY}`)
        const {id, name, description, released, background_image, rating, parent_platforms, platforms, genres} = data
        // let platformsModal = () => {
        //     const platformNames = platforms.map((e) => {return {id: e.platform.id, name: e.platform.name}})
        //     for (let i = 0;i < platformNames.length; i++) {

        //     }
        //}
        let genresNames = genres.map((e) => {return {id: e.id, name: e.name}})
        return (
            {
                id: id,
                name: name,
                background_image: background_image,
                parent_platforms: parent_platforms,
                platforms: parent_platforms,
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

module.exports = {GameID}