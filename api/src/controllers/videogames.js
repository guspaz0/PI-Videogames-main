const {getVideogamesJson, getPlatforms} = require('../utils')
const { Videogame, Genres } = require('../db')

//const { Op } = require('sequelize')
//const { GameID, allGameService, searchGameName } = require('../services')

async function getAllvideogames(req,res) {
    try{
        const {name} = req.query
        
        const gamesAPI = await getVideogamesJson()
        const gamesDB = await Videogame.findAll({
            include: [{
                model: Genres,
                attributes: ['id', 'name'],
                through: {attributes: []}
            }]
        })

        const AllGames = [...gamesAPI, ...gamesDB]

        if (name) {
            const result = AllGames.filter((e) => e.name.toLowerCase().includes(name.toLowerCase())).slice(0,15)
            if (result.length === 0) {
                res.status(404).send({message: `Not found results for "${name}"`})
            } else {
                res.status(200).json(result)
            }
        } else {
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
            const GameID = await Videogame.findByPk(id, {
                include: [{
                    model: Genres,
                    attributes: ['id', 'name'],
                    through: {attributes: []}
                }]
            })
            if (GameID) {
                res.status(200).json(GameID)
            } else {
                res.status(404).json({message: `not found results for "${id}"`})
            }
        } else {
            const gamesAPI = await getVideogamesJson()
            const gameID = gamesAPI.filter((e) => e.id === Number(id))[0]
            if (gameID) {
                res.status(200).json(gameID)
            } else {
                res.status(404).json({message: `not found results for "${id}"`})
            }
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function createVideogame (req,res) {
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
            const platforms_format = platforms.map((x) => {return {platform: x}})
            const [Game, Created] = await Videogame.findOrCreate({
                where: {name: name},
                defaults: {platforms: platforms_format, description, background_image, released, rating}})
            if (Created) {
                genres.map(async (e) => {
                    await Game.addGenres(e.id)
                })
                res.status(201).json(Game)
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
    createVideogame
}