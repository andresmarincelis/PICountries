import React, { useEffect } from 'react'
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { getActivity, getAllCountries } from '../../redux/actions';

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
      <Container />
    </div>
  );
};

export default Home;
