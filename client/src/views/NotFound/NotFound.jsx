import React from 'react'
import error404 from '../../assets/404.gif'
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.containerNotFound}>
      <img className={style.imgNotFound} src={error404} alt="loading" />
    </div>
  )
}

export default NotFound