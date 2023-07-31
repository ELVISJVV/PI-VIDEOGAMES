import React from 'react'
import { Link } from 'react-router-dom';
import start from '../../assets/start.gif'

const Landing = () => {
  return (
    <div>

          <Link to={`/home`}><img src={start} alt="start" /></Link>
    </div>
  )
}

export default Landing