import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import Filtros from "./Filtros";

import style from './NavBar.module.css'

const NavBar = function () {


    return (
        <div className={style.navBar}>
            <SearchBar />
            <Filtros />
            <Link to={'/form'}>
            <button className={style.button}>Crear Actividad Turistica</button>
          </Link>
        </div>
    )
}

export default NavBar;