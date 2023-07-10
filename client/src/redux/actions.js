import Axios from 'axios';
const {VITE_DB_HOST, VITE_DB_PORT} = import.meta.env
export const ALLVIDEOGAMES = 'ALLVIDEOGAMES';
export const FIND_VIDEOGAMES_BY_NAME = 'FIND_VIDEOGAMES_BY_NAME';
export const VIDEOGAME_DETAIL = 'VIDEOGAME_DETAIL'

export function getAllvideogames(){
    return async function (dispatch) {
        try{    
            const allVideogames = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames`);
            if (allVideogames) {
                dispatch({
                    type: ALLVIDEOGAMES,
                    payload: allVideogames.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};
export function VideogameDetail(id){
    return async function (dispatch) {
        try{    
            console.log(id)
            const VideogameDetail = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames/${id}`);
            if (VideogameDetail.data) {
                dispatch({
                    type: VIDEOGAME_DETAIL,
                    payload: VideogameDetail.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export function findVideogames(name){
    return async function (dispatch) {
        try{    
            const findVideogameName = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames?name=${name}`);
            if (findVideogameName.data) {
                dispatch({
                    type: FIND_VIDEOGAMES_BY_NAME,
                    payload: findVideogameName.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};
