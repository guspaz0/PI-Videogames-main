const {getGenres} = require('../utils')
const {Genres} = require('../db')

async function getGenresLocal (req,res) {
    try{
        const genres = await Genres.findAll()
        res.status(200).json(genres)
    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenresLocal}