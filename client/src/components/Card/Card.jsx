import React from 'react'
import style from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { country, id } = props;


    return (
        <div className={style.cardContainer}>
            <Link to={`/detail/${id}`}>
                <div className={style.imageContainer}>
                    <img
                        className={style.countryImage}
                        src={country.bandera}
                        alt={country.name}
                    />
                </div>
                <div>
                    <h3>{country.name}</h3>
                    <p>Continente: {country.continente}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;
