require("dotenv").config()
const { URL, KEY } = process.env;
const Axios = require('axios');

async function getParentPlatforms () {
    try {
        const {data} = await Axios.get(`${URL}/platforms/lists/parents?key=${KEY}`)
        if (data) {
            const parent_platforms = data.results.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    platforms: 
                        e.platforms.map((x) => {
                            return {
                                id: x.id,
                                name: x.name
                            }
                        })
                    
                }
            })
            return parent_platforms
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getParentPlatforms}