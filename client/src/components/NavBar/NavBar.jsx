import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { getVideogamesByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const Navbar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(getVideogamesByName(searchText))
    // }, [searchText]);


    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = () => {
        dispatch(getVideogamesByName(searchText))
    };

    return (
        <nav className="navbar">

            <div className="searchbar">
                <input type="text" value={searchText} onChange={handleSearch} />
                <button placeholder='Enter name of game' onClick={handleSearchSubmit}>Buscar</button>
            </div>

            <nav>
                <button>Create Game</button>
            </nav>
        </nav>
    );
};

export default Navbar;