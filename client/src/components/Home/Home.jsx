import Paginado from '../Paginado/Paginado';
import NavBar from '../NavBar/NavBar';


import style from "./Home.module.css";

const Home = () => {

  return (

    <div className={style.homeContainer}>
      <NavBar />
      <Paginado />
    </div>
  );
};

export default Home;
