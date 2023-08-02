import React from 'react'
import { Link } from 'react-router-dom';
import start from '../../assets/start.gif'
import style from './Landing.module.css'
import background from '../../assets/backgroundGame.jpg'

const Landing = () => {
  return (
    <div className={style.backgroundContainer} style={{ backgroundImage: `url(${background})` }}>
      <div className={style.centeredContent}>
        <Link to={`/home`}>
          <img src={start} alt="start" />
        </Link>
      </div>
    </div>
  )
}

export default Landing