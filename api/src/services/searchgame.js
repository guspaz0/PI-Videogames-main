require("dotenv").config()
const { URL, KEY } = process.env;
const Axios = require('axios');
const {Videogame} = require('../db')

async function searchGameName(name) {
    try {
        const { data } = await Axios.get(`${URL}/games?search=${name}&key=${KEY}&page_size=15`)
        const Result = data.results.map((e) => {
            let platformNames = e.parent_platforms.map((x) => x.platform.name)
            let genresNames = e.genres.map((x) => x.name)
            return {
                id: e.id,
                name: e.name,
                background_image: e.background_image,
                platforms: platformNames,
                genres: genresNames,
                released: e.released,
                rating: e.rating,
            }
        })
        return Result
    } catch (error) {
        console.log(error)
    }
}

async function searchGameNameDB(name) {
    try {
        const gamesDB = await Videogame.findAll({
            where: {
                name: {[Op.like]: `%${name}%`},
                [Op.or]: [
                    {name: {[Op.like]: `${name}%`}},
                ]
            },
            includes: [{
                model: Genres,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
        return gamesDB
    } catch (error) {
        console.log(error)
    }
}

module.exports = {searchGameName, searchGameNameDB}