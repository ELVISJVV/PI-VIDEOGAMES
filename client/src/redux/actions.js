import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_ID } from "./actionTypes";
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
            console.error('Error al obtener los videojuegos:', error);
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
                console.error('Error al obtener el videojuego:', error);
            }
    
        }
    
}