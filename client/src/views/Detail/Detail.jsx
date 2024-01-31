import React from 'react'
import { useDispatch } from "react-redux";
import { DetailCard, Loading } from '../../components'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVideogameById } from '../../redux/actions';

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getVideogameById(id))
            .then(() => setLoading(false));

    }, [dispatch, id]);



    return (
        <div className='detail'>
            {
                loading ? <Loading /> : <DetailCard />
            }


        </div>
    )
}

export default Detail