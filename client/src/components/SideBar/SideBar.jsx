import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    getGenres,
    filterByGenre,
    filterByOrigin,
    sortByName,
    sortByRating,
    resetFilters
} from '../../redux/actions';
import { useEffect, useState } from 'react';
import style from './SideBar.module.css'

const SideBar = ({ currentPage, setCurrentPage }) => {
    const dispatch = useDispatch()
    const defaultFilters = {
        orderBy: 'default',
        rating: 'default',
        genre: 'default',
        origin: 'default'
    };
    const genres = useSelector(state => state.genres)

    const [filters, setFilters] = useState(defaultFilters);


    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])


    const handleFilterChange = (event) => {
        setCurrentPage(1);
        setFilters(prevFilters => ({
            ...prevFilters,
            [event.target.name]: event.target.value
        }));

        if (event.target.name === 'genre') {
            dispatch(filterByGenre(event.target.value))
        }

        if (event.target.name === 'origin') {
            dispatch(filterByOrigin(event.target.value))
        }

        if (event.target.name === 'orderBy') {
            dispatch(sortByName(event.target.value))
        }

        if (event.target.name === 'rating') {

            dispatch(sortByRating(event.target.value))
        }

    };



    const handleResetFilters = () => {
        setFilters(defaultFilters);
        dispatch(resetFilters())
    };


    return (
        <div className={style.filtersContainer}>

            <h2>Filters</h2>

            <select
                name='orderBy'
                value={filters.orderBy}
                onChange={handleFilterChange}
                className={style.filterSelect}
            >
                <option disabled value="default">  A-Z / Z-A  </option>
                <option value="ascendingName">   Name A/Z   </option>
                <option value="descendingName"> Name Z/A </option>
            </select>


            <select
                name='rating'
                value={filters.rating}
                onChange={handleFilterChange}
                className={style.filterSelect}
            >
                <option disabled value="default">Rating</option>

                <option value="ascendingRating">Rating ↑ </option>
                <option value="descendingRating">Rating ↓ </option>
            </select>


            <select
                name='genre'
                value={filters.genre}
                onChange={handleFilterChange}
                className={style.filterSelect}
            >
                <option disabled value="default">Filter by Genre</option>
                {genres && genres.map(genre => {
                    return (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    )
                })}
            </select>

            <select
                name='origin'
                value={filters.origin}
                onChange={handleFilterChange}
                className={style.filterSelect}
            >
                <option disabled value="default">Filter by Origin</option>
                <option value="api">Api</option>
                <option value="created">Created</option>
            </select>

            <button
                onClick={handleResetFilters}
                className={style.resetButton}
            >Reset Filters</button>
        </div>
    )
}

export default SideBar