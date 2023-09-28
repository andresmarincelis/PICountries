import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { searchCountry } from '../../redux/actions';
import { searchCountry } from '../../reduxTK/slices/countriesSlice';

import style from './SearchBar.module.css';


const SearchBar = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');


  useEffect(() => {
    dispatch(searchCountry(value));
  }, [value, dispatch]);

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        placeholder="Buscar países..."
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;