import React from 'react'
import { Loading, PaginatedList, Navbar, SideBar } from '../../components'
import { useEffect, useState } from 'react'; import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import style from './Home.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getVideogames())
            .then(() => setLoading(false));
    }, [dispatch]);

    return (
        <div className={style.containerHome}>
            {/* <div className={style.navbar}> */}
                <Navbar setCurrentPage={setCurrentPage} />
            {/* </div> */}

            <div className={style.content}>
                <div className={style.sidebarHome}>
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                <div className={style.paginatedList}>
                    {loading ? <Loading /> : <PaginatedList currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                </div>

            </div>
        </div>
    )
}

export default Home