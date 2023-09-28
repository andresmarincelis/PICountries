import Paginado from '../Paginado/Paginado';
import NavBar from '../NavBar/NavBar';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
// import { getActivity, getAllCountries } from '../../redux/actions';
import { getActivity } from '../../reduxTK/slices/activitiesThunk';
import { getAllCountries } from '../../reduxTK/slices/countriesThunk';


import style from "./Home.module.css";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivity())
  }, [])

  return (

    <div className={style.homeContainer}>
      <NavBar />
      <Paginado />
    </div>
  );
};

export default Home;
