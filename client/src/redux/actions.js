import Axios from 'axios';
const {VITE_DB_HOST, VITE_DB_PORT} = import.meta.env
export const ALLVIDEOGAMES = 'ALLVIDEOGAMES';
export const FIND_VIDEOGAMES_BY_NAME = 'FIND_VIDEOGAMES_BY_NAME';
export const VIDEOGAME_DETAIL = 'VIDEOGAME_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
export const ORDER_GAMES = 'ORDER_GAMES';
export const FILTER_GAMES = 'FILTER_GAMES';
export const ERRORS = 'ERRORS'

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
            return error.response
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
            console.log(data, 'actions try')
            if (data) {
                dispatch({
                    type: GET_PLATFORMS,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error.response.status, 'actions catch')
            return error.response.status
        }
    };
};
export function orderVideogames(direction) {
    return function (dispatch){
        dispatch({
            type: ORDER_GAMES,
            payload: direction
        })
    }
}
export function filterVideogames(condition) {
    return function (dispatch){
        dispatch({
            type: FILTER_GAMES,
            payload: condition
        })
    }
}
