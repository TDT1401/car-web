import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Slidebar from './components/slidebar/Slidebar';
import CarStatus from './components/carstatus/Carstatus';
import Bottom from './components/bottom/Bottom';
function App() {


  return (
    <div className="">
      <Header />
      <Menu />
      <Slidebar />
      <CarStatus/>
      <Bottom/>
    </div>
  );
}

export default App;
