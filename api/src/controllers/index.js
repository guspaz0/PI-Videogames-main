const {getAllvideogames, getVideogameByID, createVideogame} = require('./videogames')
const {getGenresLocal} = require('./genres')
const {parent_platforms} = require('./platforms')

module.exports = {
    getAllvideogames, getVideogameByID, createVideogame,
    getGenresLocal,
    parent_platforms
}