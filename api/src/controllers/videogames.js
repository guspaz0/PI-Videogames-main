//const { Videogame, Genres } = require('../db');
const {allGameService, GameID, allGameDB, GameByIdDB, createVideogame} = require('../services');

async function getAllvideogames(req,res) {
    const {name} = req.query
    
    try{
        if (name) {
            const gamesAPI = await allGameService(name)
            //console.log(gamesAPI)
            const gamesDB = await searchGameNameDB(name)
            //console.log(gamesDB)
            //const allResults = [...gamesAPI, ...gamesDB]
            //console.log(gamesAPI)
            if (gamesAPI.length > 0 && gamesDB.length > 0) {
                const Allgames = [...gamesAPI, ...gamesDB]
                res.status(200).json(Allgames)
            } else if (gamesAPI.length > 0) {
                res.status(200).json(gamesAPI)
            } else if (gamesDB.length > 0) {
                res.status(200).json(gamesDB)
            } else {
                res.status(404).send({message: `Not found results for "${name}"`})
            }
        } else {
            const gamesAPI = await allGameService()
            const gamesDB = await allGameDB()
            const AllGames = [...gamesAPI, ...gamesDB]
            res.status(200).json(AllGames)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function getVideogameByID(req,res) {
    try{
        const {id} = req.params
        if (isNaN(id)) {
            const GameID = await GameByIdDB(id)
            if (GameID) {
                res.status(200).json(GameID)
            } else {
                res.status(404).json({message: `not found results for "${id}"`})
            }
        } else {
            const gamesAPI = await GameID(id)
            
            if (gamesAPI) {
                res.status(200).json(gamesAPI)
            } else {
                res.status(404).json({message: `not found results for "${id}"`})
            }
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function postVideogame (req,res) {
    try{
        const {name, platforms, description, background_image, released, rating, genres} = req.body;
        if (
            !name ||
            !platforms ||
            !description ||
            !background_image ||
            !released ||
            !rating ||
            !genres
            ) {
                res.status(400).json({error: 'Missing some data'})
        } else {
            const CreateGame = await createVideogame(req.body)
            if (CreateGame) {
                res.status(201).json(CreateGame)
            } else {
                res.status(406).json({error: 'Game already created in DB'})
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllvideogames,
    getVideogameByID,
    postVideogame
}