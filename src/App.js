import './App.css';
import React from 'react';
import Home from './view/home';
import DadosContext from './contex/DadosContex';


function App() {



  return (
    <DadosContext>
      <Home/>
    </DadosContext>
  );
}

export default App;
