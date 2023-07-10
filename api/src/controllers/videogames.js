const {getVideogamesJson} = require('../utils')
const { Videogame, Genres } = require('../db')
const { Op } = require('sequelize')
const { GameID, allGameService, searchGameName } = require('../services')

async function getAllvideogames(req,res) {
    try{
        const {name} = req.query

        const gamesAPI = await getVideogamesJson()
        const gamesDB = await Videogame.findAll({
            where: {
                name: {[Op.like]: `%${name}%`},
                [Op.or]: [
                    {name: {[Op.like]: `${name}%`}},
                ]
            },
            includes: [{
                model: Genres,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
        const AllGames = [...gamesAPI, ...gamesDB]

        if (name) {
            const result = AllGames.filter((e) => e.name.toLowerCase().includes(name)).slice(0,15)
            if (result.length === 0) {
                res.status(500).send({message: "no se encontraron resultados"})
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
        const games = await getVideogamesJson()
        const gameID = games.filter((e) => e.id === Number(id))

        res.status(200).json(gameID)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function createVideogame (req,res) {
    try{
        const {name,platforms, description, background_image, released, rating, genres} = req.body
        const [game, created] = await Videogame.findOrCreate({where: {name,platforms, description, background_image, released, rating}})
        if (created) {
            genres.map((e) => {
                game.addGenres(e.id)
            })
            res.status(201).json(game)
        } else {
            res.status(403).json({error: 'ya existe el objeto'})
        }

        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    getAllvideogames,
    getVideogameByID,
    createVideogame
}