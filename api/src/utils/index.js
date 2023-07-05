//require("dotenv").config()
//const { KEY } = process.env
const { Genres } = require("../db")
const videogames = require('./videogames_100.json');
const videogames2 = require('./videogames_100_page2.json');
const videogames3 = require('./videogames_100_page3.json');
const genresjson = require('./genres.json');

async function getVideogamesJson() {
    try{
        const allgames = {results: [...videogames.results, ...videogames2.results, ...videogames3.results.slice(0,20)]}
        const games = allgames.results.map((e)=> {
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