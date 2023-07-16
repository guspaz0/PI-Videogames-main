import { 
    ALLVIDEOGAMES,
    VIDEOGAME_DETAIL,
    FIND_VIDEOGAMES_BY_NAME,
    GET_GENRES,
    GET_PLATFORMS,
    POST_VIDEOGAME,
    ORDER_GAMES,
    FILTER_GAMES,
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
                Search: action.payload,
                Videogames: action.payload,
            }
        case VIDEOGAME_DETAIL:
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
        case ORDER_GAMES:
            let orderedList = state.Videogames.sort((a,b) => {
                if (action.payload === "A-Z") return a.name.localeCompare(b.name);
                if (action.payload === "Z-A") return b.name.localeCompare(a.name);
                if (action.payload === "Max Rating") return b.rating - a.rating;
                if (action.payload === "Min Rating") return a.rating - b.rating; 
            })
            return {
                ...state,
                Videogames: orderedList
            }
    default:
        return state;
    }
}
