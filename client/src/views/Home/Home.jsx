import React from 'react'
import { Loading,PaginatedList,Navbar,SideBar} from '../../components'
import { useEffect, useState } from 'react'; import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getVideogames())
            .then(() => setLoading(false));
    }, [dispatch]);

    return (


        <div  >
            <Navbar />
            <SideBar />
            {
                loading ? <Loading /> : <PaginatedList /> 
            }
        </div >
    )
}

export default Home