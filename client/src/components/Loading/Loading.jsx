import React from 'react'
import sonic from '../../assets/sonic.gif'
import style from './Loading.module.css'
const Loading = () => {
  return (

    <div className={style.gif_container}>
      <img src={sonic} alt="loading" />
    </div>
  )
}

export default Loading