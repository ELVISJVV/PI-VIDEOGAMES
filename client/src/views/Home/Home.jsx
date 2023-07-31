import React from 'react'
import { Cards, Loading,PaginatedList } from '../../components'
import { useEffect, useState } from 'react'; import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getVideogames())
            .then(() => setLoading(false));
    }, [dispatch]);

    // if (loading) {
    //     return <Loading />;
    // }

    return (


        <div  >
        <h1>gohal</h1>
            {
                loading ? <Loading /> : <PaginatedList /> 
            }
        </div >
    )
}

export default Home