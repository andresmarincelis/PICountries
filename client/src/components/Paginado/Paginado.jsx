import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Card from "../Card/Card";

import style from "./Paginado.module.css";


const Paginado = () => {

    const countries = useSelector(state => state.countries.filtrados);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const COUNTRIES_PER_PAGE = 10;

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    const indexOfLastPage = currentPage * COUNTRIES_PER_PAGE;
    const indexOfFirstPage = indexOfLastPage - COUNTRIES_PER_PAGE;
    const currentCountries = filteredCountries.slice(indexOfFirstPage, indexOfLastPage);

    const prevHandler = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const nextHandler = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div className={style.cardList}>
            {currentCountries.map((country) => (
                <Card id={country.id} key={country.id} country={country} />
            ))}
            
            <div>
            <div>
            <button>Página {currentPage}</button>
            </div>
                <button
                    className={style.button}
                    onClick={prevHandler}
                    disabled={currentPage === 1}>
                    {"<"}
                </button>
                <button
                    className={style.button}
                    onClick={nextHandler}
                    disabled={indexOfLastPage >= filteredCountries.length}>
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default Paginado;
