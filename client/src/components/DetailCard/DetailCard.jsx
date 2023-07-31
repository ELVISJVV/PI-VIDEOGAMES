import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const DetailCard = () => {
    
    const videogameDetail = useSelector(state => state.videogameDetail)
    console.log(videogameDetail);
  return (
    <div>
    <h2>hola</h2>
        <h1>{videogameDetail.name}</h1>
        <img src={videogameDetail.image} alt="img not found"/>
        
        <h3>{videogameDetail.rating}</h3>
        <h3>{videogameDetail.genres}</h3>
        <h3>{videogameDetail.platforms}</h3>
        <h3>{videogameDetail.released}</h3>
          <div dangerouslySetInnerHTML={{ __html: videogameDetail.description }} />

          <Link to={`/home`}><button>Back</button></Link>
    </div>
  )
}

export default DetailCard