import {
    GET_VIDEOGAMES,
    GET_VIDEOGAME_BY_ID,
    GET_GENRES,
    GET_VIDEOGAMES_BY_NAME,
    POST_VIDEOGAME,
    FILTER_BY_GENRE,
    FILTER_BY_ORIGIN,
    SORT_BY_NAME,
    SORT_BY_RATING,
    RESET_FILTERS
} from "./actionTypes";

const initialState = {
    videogames: [],
    allVideogames: [],
    videogameDetail: {},
    genres: [],
    videogamesByName: [],
    videogameCreated: {},
    filteredByGenre: [],
    filteredByOrigin: [],
    sortedByName: [],
    sortedByRating: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                videogames: action.payload
            }

        case GET_VIDEOGAME_BY_ID:
            return {
                ...state,
                videogameDetail: action.payload
            }

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }

        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                videogames: action.payload,
                videogamesByName: action.payload
            }

        case POST_VIDEOGAME:
            return {
                ...state,
                videogameCreated: action.payload
            }

        case FILTER_BY_GENRE:
            if (action.payload === 'default') {
                
                return {
                    ...state,
                    videogames: state.videogames,
                    filteredByGenre: []
                };
            } else {
               
                const filteredByGenre = state.videogames.filter(game => game.genres.includes(action.payload));
                
                return {
                    ...state,
                    videogames: filteredByGenre,
                    filteredByGenre: filteredByGenre
                };
            }

        case FILTER_BY_ORIGIN:
            let filteredByOrigin = [];
            if (action.payload === "created") {
                filteredByOrigin = state.videogames.filter((game) => game.created);
            } else if (action.payload === "api") {
                filteredByOrigin = state.videogames.filter((game) => !game.created);
            }
            return {
                ...state,
                videogames: filteredByOrigin
            };


        case SORT_BY_NAME:

            let sortedByName = [];
            if (action.payload === 'ascendingName') {
                sortedByName = [...state.videogames].sort((a, b) => a.name.localeCompare(b.name));
            }

            if (action.payload === 'descendingName') {
                sortedByName = [...state.videogames].sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                videogames: sortedByName,
                sortedByName: sortedByName
            };

        case SORT_BY_RATING:
            let sortedByRating = [];
            if (action.payload === 'ascendingRating') {
                sortedByRating = [...state.videogames].sort((a, b) => a.rating - b.rating);
            }

            if (action.payload === 'descendingRating') {
                sortedByRating = [...state.videogames].sort((a, b) => b.rating - a.rating);
            }

            return {
                ...state,
                videogames: sortedByRating,
                sortedByRating: sortedByRating
            };

        case RESET_FILTERS:
            return {
                ...state,
                videogames: state.allVideogames,
                filteredByGenre: [],
                filteredByOrigin: [],
                sortedByName: [],
                sortedByRating: []
            }


        default:
            return state;
    }
}



export default reducer;