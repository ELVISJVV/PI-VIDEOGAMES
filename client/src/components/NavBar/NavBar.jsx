import React, { useState } from 'react';
import './Navbar.css';
import { getVideogamesByName,refreshGames } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const videogames = useSelector(state => state.videogames)




    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = () => {
        dispatch(getVideogamesByName(searchText))
    };

    const handleAllGames = () => {
        dispatch(refreshGames())
    }
    return (
        <nav className="navbar">

            <div className="searchbar">
                <input type="text" value={searchText} onChange={handleSearch} />
                <button  onClick={handleSearchSubmit}>Buscar</button>
                <button onClick={handleAllGames}>All the games</button>
            </div>

            <nav>
                
                <Link to={`/create`}><button>Create Game</button></Link>
            </nav>
        </nav>
    );
};

export default Navbar;