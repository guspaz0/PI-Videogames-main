import { 
    ALLVIDEOGAMES,
    FIND_VIDEOGAMES_BY_NAME,

} from './actions'

const initialState = {
    Videogames: [],
    CP_Videogames: [],
    Search: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ALLVIDEOGAMES:
            return {
                ...state,
                Videogames: [...state.Videogames, ...action.payload],
                CP_Videogames: [...state.Videogames, ...action.payload]
            }
        case FIND_VIDEOGAMES_BY_NAME:

            return {
                ...state,
                Search: [...action.payload],
            }
    default:
        return state;
    }
}