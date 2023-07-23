//const { getGenres } = require('../utils');
const { Genres } = require('../db');
const { GenresAPI } = require('../services');

async function getGenresLocal (req,res) {
    try{
        //const genres = await Genres.findAll()
        const genres = await GenresAPI()
        res.status(200).json(genres)
    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenresLocal}