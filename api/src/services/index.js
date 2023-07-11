const GameID = require('./idgame')
const GenresAPI = require('./genres')
const {searchGameName, searchGameNameDB} = require('./searchgame')
const allGameService = require('./allGameService')

module.exports = { GameID, GenresAPI, searchGameName, searchGameNameDB, allGameService }