import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import style from './DetailCard.module.css'

const DetailCard = () => {
  const videogameDetail = useSelector(state => state.videogameDetail);

  return (
    <div className={style.container}>
      <h1 className={style.title}>{videogameDetail.name}</h1>
      <img src={videogameDetail.image} alt="Image not found" className={style.image} />

      <div className={style.infoContainer}>
        <h2 className={style.subtitle}>Rating</h2>
        <p className={style.rating}>{videogameDetail.rating}</p>

        <h2 className={style.subtitle}>Description</h2>
        <div className={style.description} dangerouslySetInnerHTML={{ __html: videogameDetail.description }} />

        <h2 className={style.subtitle}>Genres</h2>
        <p className={style.genres}>
          {videogameDetail.genres && videogameDetail.genres.map(genre => genre + '  ')}
        </p>

        <h2 className={style.subtitle}>Platforms</h2>
        <p className={style.platforms}>
          {videogameDetail.platforms && videogameDetail.platforms.map(platform => platform + '  ')}
        </p>

        <h2 className={style.subtitle}>Released</h2>
        <p className={style.released}>{videogameDetail.released}</p>
      </div>

      <Link to={`/home`} className={style.backButton}>
        <button className={style.button}>Back</button>
      </Link>
    </div>
  )
}

export default DetailCard;
