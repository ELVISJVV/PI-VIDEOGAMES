import {
    GET_VIDEOGAMES,
    GET_VIDEOGAME_BY_ID,
    GET_GENRES,
    GET_VIDEOGAMES_BY_NAME,
    POST_VIDEOGAME
} from "./actionTypes";

const initialState = {
    videogames: [],
    videogameDetail: {},
    genres: [],
    videogamesByName: [],
    videogameCreated: {}

};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
        return{
            ...state,
            videogames: action.payload
        }
        
        case GET_VIDEOGAME_BY_ID:
        return{
            ...state,
            videogameDetail: action.payload
        }

        case GET_GENRES:
        return{
            ...state,
            genres: action.payload
        }

        case GET_VIDEOGAMES_BY_NAME:
        return{
            ...state,
            videogames: action.payload
        }

        case POST_VIDEOGAME:
        return{
            ...state,
            videogameCreated: action.payload
        }

        default:
            return state;
    }
}



export default reducer;