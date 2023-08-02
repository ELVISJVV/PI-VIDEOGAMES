import React from 'react'
import { GameForm } from '../../components'
import { Link } from 'react-router-dom'


const Create = () => {
    return (
        <div>
            <GameForm />
            <Link to={`/home`}><button>Cancel</button></Link>
        </div>
    )
}

export default Create