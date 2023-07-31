import React from 'react'
import Card from '../Card/Card'
import { useSelector } from "react-redux";

const Cards = (props) => {

    // const videogames = useSelector(state => state.videogames)
    const videogames = props.videogames
    
   
  return (
    <div>
        {videogames.map((videogame) => {
            return (
                <Card

                    key={videogame.id}
                    id={videogame.id}
                    name={videogame.name}
                    image={videogame.image}
                    rating={videogame.rating}
                />
            )
        })}
    </div>

  )
}

export default Cards