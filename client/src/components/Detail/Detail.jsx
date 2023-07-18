import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./Detail.module.css";

const Detail = () => {
  const params = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    console.log(params)
    axios.get(`http://localhost:3001/countries/${params.idPais}`)
      .then(({ data }) => {
        console.log(data);
        if (data.name) {
          setCountry(data);
        } else {
          window.alert('No hay pais con ese ID')
        }
      });
    return setCountry({});
  }, [params.idPais]);


  return (
    <div>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
    <div className={style.detailContainer}>
      <div className={style.card_img}>
        <img className={style.img} src={country.bandera} alt={country.Detail} />
      </div>
      <div className={style.card_img2}>
        <p className={style.nameH3}>ID: {country.id}</p>
        <p className={style.nameH3}>Pais: {country.name}</p>
        <p className={style.nameH3}>Continente: {country.continente}</p>
        <p className={style.nameH3}>Capital: {country.capital}</p>
        <p className={style.nameH3}>Subregion: {country.subregion}</p>
        <p className={style.nameH3}>Area: {country.area} km²</p>
        <p className={style.nameH3}>Poblacion: {country.poblacion}</p>
      </div>


    </div>
    </div>
  );
};


export default Detail;
