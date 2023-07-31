import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Cards from '../Cards/Cards';


const PaginatedList = () => {
    const videogames = useSelector(state => state.videogames)
    const data = videogames
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    useEffect(() => {
        const paginatedData = getPaginatedData();
        console.log(paginatedData);
    }, [currentPage, data]);

    return (
        <div>
            {/* <ul>
                {getPaginatedData().map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}
<Cards videogames={getPaginatedData()}/>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>

                {/* Botones con números de paginado */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}

                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default PaginatedList;
