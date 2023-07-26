const {GameID} = require('./idgame')
const {GenresAPI, initializeDB} = require('./genres')
const {allGameDB, GameByIdDB} = require('./gamesDB')
const {allGameService} = require('./allGameService')
const {getParentPlatforms} = require('./platforms')
const {createVideogame} = require('./createGame')

module.exports = { 
    GameID,
    GenresAPI, initializeDB,
    allGameDB, GameByIdDB,
    allGameService,
    getParentPlatforms,
    createVideogame,
}