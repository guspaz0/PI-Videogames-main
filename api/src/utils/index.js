const videogames = require('./videogames.json');

async function getVideogamesJson() {
    try{
        const games = videogames.results.slice(0,10).map((e)=> {
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
        console.log(games)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getVideogamesJson}