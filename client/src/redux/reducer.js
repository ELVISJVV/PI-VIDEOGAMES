import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID } from "./actionTypes";

const initialState = {
    videogames: [],
    videogameDetail: {}
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

        default:
            return state;
    }
}



export default reducer;