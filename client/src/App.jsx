import React from 'react';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:idPais" element={<Detail />} />
      <Route path="/form" element={<Form />} />
      <Route path='/asdf' element={<NavBar />} />
    </Routes>
  );
};

export default App;
