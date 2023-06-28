//require("dotenv").config()
//const { KEY } = process.env
const { Genres } = require("../db")
const videogames = require('./videogames.json');
const genresjson = require('./genres.json')

async function getVideogamesJson() {
    try{
        const games = videogames.results.map((e)=> {
            return {
                id: e.id,
                name: e.name,
                description: e.description,
                platforms: e.platforms,
                background_image: e.background_image,   
                released: e.released,
                rating: e.rating
            }
        })
        return games
    } catch (error) {
        console.log(error)
    }
}

async function getGenres () {
    try {
        const listOfGenres = genresjson.results.map((e) => {
            return {id: e.id, name: e.name}
        });
        if (!listOfGenres) {
            throw Error("Not genres found")
          } else {
            Genres.bulkCreate(listOfGenres)
            const listOfGenresFromDb = await Genres.findAll()
            return listOfGenresFromDb
          }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getVideogamesJson, getGenres}