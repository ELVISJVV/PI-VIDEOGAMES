// import React from 'react'
// import Card from '../Card/Card'
// import style from './Cards.module.css'

// const Cards = (props) => {

//     const videogames = props.videogames
    
   
//   return (
//     <div>
//         {videogames.map((videogame) => {
//             return (
//                 <Card

//                     key={videogame.id}
//                     id={videogame.id}
//                     name={videogame.name}
//                     image={videogame.image}
//                     rating={videogame.rating}
//                     genres={videogame.genres}
//                 />
//             )
//         })}
//     </div>

//   )
// }

// export default Cards


import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = (props) => {
    const videogames = props.videogames;

    return (
        <div className={style.cardsContainer}>
            {videogames.map((videogame) => {
                return (
                    <Card
                        key={videogame.id}
                        id={videogame.id}
                        name={videogame.name}
                        image={videogame.image}
                        rating={videogame.rating}
                        genres={videogame.genres}
                    />
                );
            })}
        </div>
    );
}

export default Cards;