require("dotenv").config()
const { URL, KEY } = process.env
const Axios = require('axios')

const allGameService = async (name) => {
  if (name) {
    const { data } = await Axios.get(`${URL}/games?search=${name}&key=${KEY}&page_size=15`)
    const arrayOfSearchGames = data.results.map(
      ({
        id,
        name,
        background_image,
        rating,
        released,
        parent_platforms,
        genres
      }) => ({
        id,
        name,
        background_image,
        rating: Math.floor(rating),
        released,
        platforms: parent_platforms,
        genres: genres
      })
    )
    return arrayOfSearchGames
  } else {
    let promises = [1, 2, 3, 4].map(
      async (e) =>
        await Axios.get(`${URL}/games?key=${KEY}&page_size=25&page=${e}`)
    )
    response = await Promise.all(promises)

    response = response.reduce((prev, curr) => {
      return prev.concat(curr.data.results)
    }, [])

    const videogameArray = response.map(
      ({
        id,
        name,
        background_image,
        rating,
        released,
        parent_platforms,
        genres
      }) => ({
        id,
        name,
        background_image,
        rating: Math.floor(rating),
        released,
        platforms: parent_platforms,
        genres: genres,
      })
    )

    if (videogameArray.length === 0) {
      throw Error("Game list not found")
    } else {
      return videogameArray
    }
  }
}
module.exports = {allGameService}
