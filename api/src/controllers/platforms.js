const { getPlatforms } = require('../utils') // para Testing
const { getParentPlatforms } = require('../services') // para produccion

async function parent_platforms (req,res) {
    try{
        const data = await getPlatforms()
        if (data) {
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { parent_platforms }