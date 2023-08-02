// import React from 'react'
// import { Link } from 'react-router-dom'
// import style from './Card.module.css'


// const Card = ({ id, name, image, rating, genres }) => {

//   return (
//     <div>
//       <h1 >{name}</h1>
//       <img src={image} alt="imagen" width="200px" height="200px" />
//       <h3>{rating}</h3>

//       <h3>{genres && genres.map((elem) => elem + " ")}</h3>

//       <Link to={`/detail/${id}`}><button>Read more</button></Link>
//     </div>

//   )
// }

// export default Card

import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, image, rating, genres }) => {
  return (

    <div className={`${style.card} card`}>
      <h1>{name}</h1>
      <img src={image} alt="imagen" />
      <h3>{rating}</h3>
      <h3>{genres && genres.map((elem) => elem + ' ')}</h3>
      <Link to={`/detail/${id}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default Card;