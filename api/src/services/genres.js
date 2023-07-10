require("dotenv").config()
const { URL, KEY } = process.env;
const Axios = require('axios');

async function GenresAPI() {
    try{
        const { data } = await Axios.get(`${URL}/genres?key=${KEY}`)
        const listOfGenres = data.results.map((e) => {
            return {id: e.id, name: e.name}
        });
        return listOfGenres
    } catch (error) {
        console.log(error)
    }
}

module.exports = GenresAPI