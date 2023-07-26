const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllvideogames, getVideogameByID, getGenresLocal, postVideogame, parent_platforms} = require('../controllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req,res) => {
    try{
        res.status(200).json({message: 'api de videogames PI Henry'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get('/videogames', getAllvideogames);
router.get('/videogames/:id', getVideogameByID);
router.post('/videogames', postVideogame);
router.get('/genres', getGenresLocal);
router.get('/platforms', parent_platforms);


module.exports = router;
