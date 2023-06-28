const {getVideogamesJson} = require('../utils')

async function getAllvideogames(req,res) {
    try{
        const {name} = req.query
        const games = await getVideogamesJson()
        if (name) {
            const result = games.filter((e) => e.name.toLowerCase().includes(name))
            if (result.length === 0) {
                res.status(500).send({message: "no se encontraron resultados"})
            } else {
                res.status(200).json(result)
            }
        } else {
            res.status(200).json(games)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function getVideogameByID(req,res) {
    try{
        const {id} = req.params
        const games = await getVideogamesJson()
        const gameID = games.filter((e) => e.id === Number(id))

        res.status(200).json(gameID)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    getAllvideogames,
    getVideogameByID,
}