const {getAllvideogames, getVideogameByID, createVideogame} = require('./videogames')
const {getGenresLocal} = require('./genres')

module.exports = {
    getAllvideogames, getVideogameByID, createVideogame,
    getGenresLocal
}