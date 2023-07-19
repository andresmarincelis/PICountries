import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validate from '../Validate/Validate';
import { createActivity, getActivity, getAllCountries } from '../../redux/actions';

import style from './Form.module.css'

const Form = () => {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [actividad, setActividad] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    paisSeleccionado: "",
    pais: [],
  });

  useEffect(() => {
    console.log(actividad);
  }, [actividad, actividad.pais])

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "pais") {
      const paisElegido = countries.find((country) => country.id === value);
      if (actividad.pais.includes(paisElegido.id)) return alert("Pais ya seleccionado")
      setSelectedCountries([...selectedCountries, paisElegido]);
      setActividad({
        ...actividad,
        pais: [...actividad.pais, event.target.value],
      });
    } else {
      setActividad({
        ...actividad,
        [property]: value,
      });
    }
  };

  useEffect(() => {
    console.log(actividad);
  }, [actividad], actividad.pais)

  const handleRemoveCountry = (countryId) => {
    const updatedCountries = selectedCountries.filter((country) => country.id !== countryId);
    const countryCCA = updatedCountries.map((country) => country.id)
    setSelectedCountries(updatedCountries);
    setActividad({ ...actividad, pais: [...countryCCA] })
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let errors = (validate(actividad))
      if (!errors.name && !errors.dificultad && !errors.duracion && !errors.temporada) {
        dispatch(createActivity(actividad))
        dispatch(getAllCountries());
        dispatch(getActivity());
        setActividad({
          name: "",
          dificultad: "",
          duracion: "",
          temporada: "",
          paisSeleccionado: "",
          pais: [],
        })
        setSelectedCountries([])
        alert("Actividad creada correctamente");
      } else {
        for (let error of Object.values(errors)) {
          alert(error)
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }


  return (
    <div className={style.homePosition}>
      <Link to={'/home'}>
        <button>HOME</button>
      </Link>
      <div className={style.formContainer}>
        <div style={{textAlign: 'center'}}>
          <h2>Crear Actividad</h2>
          <form onSubmit={handleSubmit} type="submit">
            <div className={style.credentials}>
              <label>Nombre Actividad: </label>
              <input
                type="text"
                onChange={(event) => handleChange(event)}
                placeholder='Escalar, Trekking, etc'
                name="name"
                value={actividad.name}
              />
            </div>
            <div className={style.credentials}>
              <label>Dificultad: </label>
              <input
                type="number"
                onChange={handleChange}
                placeholder='1 a 5'
                name="dificultad"
                value={actividad.dificultad}
                min="1"
                max="5"
              />
            </div>
            <div className={style.credentials}>
              <label>Duración en horas: </label>
              <input
                type="number"
                onChange={handleChange}
                placeholder='1 a 24'
                name="duracion"
                value={actividad.duracion}
                min="1"
                max="24"
              />
            </div>
            <div className={style.credentials}>
              <label>Temporada: </label>
              <select
                name='temporada'
                value={actividad.temporada}
                onChange={handleChange}>
                <option value="Elige">Elige uno</option>
                <option value="Verano">Verano</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
                <option value="Otoño">Otoño</option>
              </select>
            </div>
            <div className={style.credentials}>
              <label>Agregar uno o varios paises: </label>
              <select
                name='pais'
                value={actividad.paisSeleccionado}
                onChange={handleChange}
              >
                <option value="">Elige un país</option>
                {countries.map((country, id) => {
                  return (
                    <option key={id} value={country.id}>{country.name}</option>
                  );
                })}
              </select>
              <div>
                {selectedCountries.map((country, id) => (
                  <div key={id} className={style.miniCard}>
                    <img src={country.bandera} alt={country.name} />
                    <p>{country.name}</p>
                    <button onClick={() => handleRemoveCountry(country.id)}>X</button>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
            <div style={{marginTop: 'auto'}}>
              <button className={style.submitBtn}>Crear Actividad</button>
            </div>
      </div>
    </div>
  )
}

export default Form;