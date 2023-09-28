import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { orderByAZ, orderByContinents, orderByPopulation, resetFilters, filterByActivity } from '../../redux/actions';
import { orderByAZ, orderByContinents, orderByPopulation, resetFilters } from '../../reduxTK/slices/countriesSlice';
import { filterByActivity } from '../../reduxTK/slices/activitiesSlice';

import style from './Filtros.module.css'

const Filtros = () => {

    const activities = useSelector((state) => state.activities.allActivities)

    const dispatch = useDispatch();
    const [byContinent, setByContinent] = useState('None');
    const [byAZ, setByAZ] = useState('None');
    const [byPopulation, setByPopulation] = useState('None');
    const [activity, setActivity] = useState('None')

    useEffect(() => {
        console.log(activity);
    }, [activity])

    const filtradoActivities = event => {
        setActivity(event.target.value);
        dispatch(filterByActivity(event.target.value));
    }

    const filtradoContinente = event => {
        setByContinent(event.target.value);
        dispatch(orderByContinents(event.target.value));
    };

    const filtradoAZ = event => {
        setByAZ(event.target.value);
        dispatch(orderByAZ(event.target.value));
    }

    const filtradoPoblacion = event => {
        setByPopulation(event.target.value);
        dispatch(orderByPopulation(event.target.value));
    }

    const limpiarFiltros = () => {
        setByContinent('None');
        setByAZ('None');
        setByPopulation('None');
        dispatch(resetFilters());
    }




    return (
        <div>
            <button className={style.button} onClick={limpiarFiltros}>Limpiar Filtros</button>
            <div className={style.filters}>
                <label>Ordenar por continente: </label>
            </div>
            <div>
                <select className={style.select} value={byContinent} onChange={filtradoContinente}>
                    <option value="None">None</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
            </div>
            <div className={style.filters}>
                <label>Ordenar por población: </label>
            </div>
            <div>
                <select className={style.select} value={byPopulation} onChange={filtradoPoblacion}>
                    <option value="None">None</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
            </div>
            <div className={style.filters}>
                <label>Ordenar Alfabéticamente: </label>
            </div>
            <div>
                <select className={style.select} value={byAZ} onChange={filtradoAZ}>
                    <option value="None">None</option>
                    <option value="Ascendente">A-Z</option>
                    <option value="Descendente">Z-A</option>
                </select>
            </div>
            <div className={style.filters}>
                <label>Actividades: </label>
            </div>
            <div>
                <select className={style.select} value={activity} onChange={filtradoActivities}>
                    <option value="">Elige una actividad</option>
                    {activities && activities.map((actividad, index) => {
                        return (
                            <option key={index} value={actividad.name}>{actividad.name}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filtros;
