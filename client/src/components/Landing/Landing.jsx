import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getActivity, getAllCountries } from '../../redux/actions';

import style from "./Landing.module.css";

const Landing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivity())
  }, [])

  return (
    <div>
      <Link to={'/home'}>
        <button className={style.button}>START</button>
      </Link>
      </div>
  );
};

export default Landing;
