import React from 'react'
import { GameForm } from '../../components'
import style from './Create.module.css'

const Create = () => {
    return (
        <div className={style.createForm}>
            <GameForm />
        </div>
    )
}

export default Create