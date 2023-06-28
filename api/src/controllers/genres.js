const {getGenres} = require('../utils')

async function getGenresLocal (req,res) {
    try{
        const genres = await getGenres()
        if (genres) {
            res.status(200).json(genres)
        }
    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenresLocal}