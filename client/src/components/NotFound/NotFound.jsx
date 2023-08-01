import React from 'react';
import gifNotFound from '../../assets/mario.gif';
import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={style.not_found_container}>
            <img src={gifNotFound} alt="Not Found" className={style.not_found_gif} />
            <p className={style.not_found_text}>Oops! The game you are looking for has not been found.</p>
        </div>
    );
};

export default NotFound;