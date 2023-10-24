import React, { useState } from 'react';
// import './Navbar.css';
import { getVideogamesByName, refreshGames } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import game_over from '../../assets/game_over.gif'
import pikachu from '../../assets/pikachu.gif'


const Navbar = ({ setCurrentPage }) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = () => {
        setCurrentPage(1);
        dispatch(getVideogamesByName(searchText))
    };

    const handleAllGames = () => {
        dispatch(refreshGames())
    }
    return (

        <nav className="navbar">
            <div className={style.logoSearch}>
                <div className={style.logo}>
                    <Link to={`/`}>
                        <img className={style.search_img} src={game_over} alt="gameOver" />
                    </Link>
                </div>
                <div className={style.search}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className={style.search_input}
                    />
                    <button className={style.navbarButton} onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>
            <div className={style.search_buttons}>
                <button className={style.navbarButton} onClick={handleAllGames}>All the games</button>
                <Link to={`/create`}>
                    <button className={style.navbarButton}>Create Game</button>
                </Link>
            </div>
            <div className={style.pikachu}>
                <img src={pikachu} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;