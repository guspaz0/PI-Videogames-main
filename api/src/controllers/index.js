const {getAllvideogames, getVideogameByID, postVideogame} = require('./videogames');
const {getGenresLocal} = require('./genres');
const {parent_platforms} = require('./platforms');

module.exports = {
    getAllvideogames, getVideogameByID, postVideogame,
    getGenresLocal,
    parent_platforms
}