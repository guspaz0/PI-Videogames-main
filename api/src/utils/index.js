//require("dotenv").config()
//const { KEY } = process.env
const videogames = require('./videogames_100.json');
const videogames2 = require('./videogames_100_page2.json');
const videogames3 = require('./videogames_100_page3.json');
const genresjson = require('./genres.json');
const platforms = require('./platforms.json')

async function getVideogamesJson() {
    try{
        const allgames = {results: [...videogames.results, ...videogames2.results, ...videogames3.results.slice(0,20)]}
        const games = allgames.results.map((e)=> {
            return {
                id: e.id,
                name: e.name,
                description: e.description,
                platforms: e.parent_platforms,
                background_image: e.background_image,   
                released: e.released,
                rating: e.rating,
                genres: e.genres
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
        return listOfGenres
    } catch (error) {
        console.log(error)
    }
}

async function getPlatforms () {
    try{
        const parent_platforms = platforms.results.map((e) => {
            return {
                id: e.id,
                name: e.name,
                platforms: e.platforms.map((x) => {
                        return {
                            id: x.id,
                            name: x.name
                        }
                    })
                
            }
        })
        return parent_platforms
    } catch (error) {console.log(error)}
}

module.exports = {getVideogamesJson, getGenres, getPlatforms}