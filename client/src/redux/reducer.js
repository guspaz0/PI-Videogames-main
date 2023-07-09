import { 
    ALLVIDEOGAMES,
    VIDEOGAME_DETAIL,
    FIND_VIDEOGAMES_BY_NAME,

} from './actions'

const initialState = {
    Videogames: [],
    CP_Videogames: [],
    Search: [],
    Videogame_DETAIL: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALLVIDEOGAMES:
            return {
                ...state,
                Videogames: [...action.payload],
                CP_Videogames: [...action.payload]
            }
        case FIND_VIDEOGAMES_BY_NAME:

            return {
                ...state,
                Search: [...action.payload],
            }
        case VIDEOGAME_DETAIL:
            console.log(action.payload)
            return {
                ...state,
                Videogame_DETAIL: action.payload
            }
    default:
        return state;
    }
}
