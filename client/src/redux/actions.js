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
import axios from "axios";


export const getVideogames = () => {

    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/videogames');
            const videogames = response.data;

            dispatch({
                type: GET_VIDEOGAMES,
                payload: videogames
            })

        } catch (error) {
            console.error('Error getting the video games:', error);
        }

    }

}


export const getVideogameById = (id) => {

    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);

            const videogame = response.data;

            dispatch({
                type: GET_VIDEOGAME_BY_ID,
                payload: videogame
            })

        } catch (error) {
            console.error('Error getting game: ', error);
        }

    }

}

export const getGenres = () => {

    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/genres');
            const genres = response.data;

            dispatch({
                type: GET_GENRES,
                payload: genres
            })

        } catch (error) {
            console.error('Error getting the genres:', error);
        }

    }

}

export const getVideogamesByName = (name) => {

    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const videogames = response.data;
            console.log(response.error);
            dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: videogames
            })

        } catch (error) {
            
            dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: []
            })
            // console.error('Error getting the video games:', error);
        }

    }

}

export const postVideogame = (videogame) => {

    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/videogames', videogame);


            dispatch({
                type: POST_VIDEOGAME,
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: POST_VIDEOGAME,
                payload: {}
            })
            console.error('Error creating the game:', error);

        }

    }
}

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
}

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export const sortByName = (order) => {
    return {
        type: SORT_BY_NAME,
        payload: order
    }
}

export const sortByRating = (order) => {
    return {
        type: SORT_BY_RATING,
        payload: order
    }
}


export const resetFilters = () => {
    return {
        type: RESET_FILTERS
    }
}
