import Axios from 'axios';
const {VITE_DB_HOST, VITE_DB_PORT} = import.meta.env
export const ALLVIDEOGAMES = 'ALLVIDEOGAMES';
export const FIND_VIDEOGAMES_BY_NAME = 'FIND_VIDEOGAMES_BY_NAME';
export const VIDEOGAME_DETAIL = 'VIDEOGAME_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';

export function getAllvideogames(){
    return async function (dispatch) {
        try{    
            const { data } = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames`);
            if (data) {
                dispatch({
                    type: ALLVIDEOGAMES,
                    payload: data
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
            const { data } = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames/${id}`);
            if (data) {
                dispatch({
                    type: VIDEOGAME_DETAIL,
                    payload: data
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
            const { data } = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames?name=${name}`);
            if (data) {
                dispatch({
                    type: FIND_VIDEOGAMES_BY_NAME,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};
export function getGenres(){
    return async function (dispatch) {
        try{    
            const { data } = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/genres`);
            if (data) {
                dispatch({
                    type: GET_GENRES,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export function getPlatforms(){
    return async function (dispatch) {
        try{    
            const { data } = await Axios.get(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/platforms`);
            if (data) {
                dispatch({
                    type: GET_PLATFORMS,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export function postVideogame(form){
    return async function (dispatch) {
        try{    
            const { data } = await Axios.post(`http://${VITE_DB_HOST}:${VITE_DB_PORT}/videogames`, form);
            if (data) {
                dispatch({
                    type: GET_PLATFORMS,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    };
};