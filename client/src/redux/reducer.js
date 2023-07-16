import { 
    ALLVIDEOGAMES,
    VIDEOGAME_DETAIL,
    FIND_VIDEOGAMES_BY_NAME,
    GET_GENRES,
    GET_PLATFORMS,
    POST_VIDEOGAME
} from './actions'

const initialState = {
    Videogames: [],
    CP_Videogames: [],
    Genres: [],
    Platforms: [],
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
        case GET_GENRES:
            return {
                ...state,
                Genres: [...action.payload]
            }
        case GET_PLATFORMS:
            return {
                ...state,
                Platforms: [...action.payload]
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
        case POST_VIDEOGAME:
            return {
                ...state,
                Videogames: [...state.Videogames, action.payload],
                CP_Videogames: [...state.Videogames, action.payload]
            }
    default:
        return state;
    }
}
