import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import style from "./Landing.module.css";

const Landing = () => {

  return (
    <div>
      <Link to={'/home'}>
        <button className={style.button}>START</button>
      </Link>
      </div>
  );
};

export default Landing;
