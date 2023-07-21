import { 
    ALLVIDEOGAMES,
    VIDEOGAME_DETAIL,
    FIND_VIDEOGAMES_BY_NAME,
    GET_GENRES,
    GET_PLATFORMS,
    POST_VIDEOGAME,
    ORDER_GAMES,
    FILTER_GAMES,
    ERRORS,
} from './actions'

const initialState = {
    Videogames: [],
    order: 'default',
    filter: 'default',
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
                CP_Videogames: [...action.payload],

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
                Videogame_DETAIL: {...action.payload}
            }
        case POST_VIDEOGAME:
            return {
                ...state,
                Videogames: [...state.Videogames, ...action.payload],
                CP_Videogames: [...state.Videogames, ...action.payload],
            }
        case ORDER_GAMES:
            function orderedList(payload) {
                if (payload === 'reset') return state.CP_Videogames
                return state.Videogames.sort((a,b) => {
                    if (payload === "A-Z") return a.name.localeCompare(b.name);
                    if (payload === "Z-A") return b.name.localeCompare(a.name);
                    if (payload === "Max Rating") return b.rating - a.rating;
                    if (payload === "Min Rating") return a.rating - b.rating; 
            })}
            function setOrderOption(payload) {
                if (payload === 'reset') {
                    return 'default'
                } else { return payload}
            }
            return {
                ...state,
                Videogames: [...orderedList(action.payload)],
                order: setOrderOption(action.payload),
            }
        case FILTER_GAMES:
            console.log(action.payload)
            function filterList (payload) {
                let FilteredList = {}
                if (payload === 'default') FilteredList = state.Videogames;
                if (payload === 'reset') FilteredList = state.CP_Videogames;
                if (payload === 'Origin DB') FilteredList = state.Videogames.filter((e) => isNaN(e.id) === true);
                if (payload === 'Origin API') FilteredList = state.Videogames.filter((e) => !isNaN(e.id));
                state.Genres.map((e) => {
                    if (e.name === payload) FilteredList = state.Videogames.filter((x) => x.genres.find((s) => s.name === payload))
                })
                
                return FilteredList
            }
            function setFilterOption(payload) {
                if (payload === 'reset') {
                    return 'default'
                } else {return payload}
            }
            return {
                ...state,
                Videogames: [...filterList(action.payload)],
                filter: setFilterOption(action.payload),
            }
        case ERRORS:
            return {
                ...state,
                Errors: action.payload
            }
    default:
        return state;
    }
}
