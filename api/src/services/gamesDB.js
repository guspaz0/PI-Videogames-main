require("dotenv").config()
const {Videogame, Genres} = require('../db')
const { Op } = require("sequelize")

async function allGameDB(name) {
    try {
        if (name) {
            const gamesDB = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`},
                },
                includes: [{
                    model: Genres,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }],
                raw: true
            })
            return gamesDB
        } else {
            const gamesDB = await Videogame.findAll({
                include: [{
                    model: Genres,
                    attributes: ['id', 'name'],
                    through: {attributes: []}
                }]
            })
            return gamesDB
        }
    } catch (error) {
        console.log(error)
    }
}

async function GameByIdDB(id) {
    try {
        const GameID = await Videogame.findByPk(id, {
            include: [{
                model: Genres,
                attributes: ['id', 'name'],
                through: {attributes: []}
            }]
        })
        return GameID
    } catch (error) {
        return error.message
    }
}

module.exports = {allGameDB, GameByIdDB}