const GameID = require('./idgame')
const GenresAPI = require('./genres')
const {searchGameName, searchGameNameDB} = require('./searchgame')
const allGameService = require('./allGameService')
const getParentPlatforms = require('./platforms')

module.exports = { GameID, GenresAPI, searchGameName, searchGameNameDB, allGameService, getParentPlatforms }