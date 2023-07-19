import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';


import style from "./Home.module.css";

const Home = () => {

  return (

    <div className={style.homeContainer}>
      <NavBar />
      <Container />
    </div>
  );
};

export default Home;
