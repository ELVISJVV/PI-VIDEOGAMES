import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './Card.module.css'


const Card = ({id,name,image,rating}) => {
    
  return (
     <div>
          {/* <h1 className={style.card__name}>{name}</h1> */}
          <h1 >{name}</h1>
          <img src={image} alt="imagen" width="200px" height="200px"/>
        <h3>{rating}</h3>

        <Link to={`/detail/${id}`}><button>Read more</button></Link>
     </div>

  )
}

export default Card