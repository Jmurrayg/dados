import Dados from '../components/dados';
import React, {useContext, useState} from 'react';
import {DadosContext} from '../contex/DadosContex';


function Home() {

  const [state, setState] = useContext(DadosContext);

  const [cantidadDados, setcantidadDados] = useState([
    {
      resultado: 0,
      numeroDeCaras: 4,
    }
  ]);
     const tirarDados = () =>{
       const result = [...state];
      for (let index = 0; index < state.length; index++) {
        const valor = Math.floor((Math.random()* result[index].numeroDeCaras) + 1)
        if(valor !== result[index].resultado ){
          result[index].resultado = valor
        }else{
          result[index].resultado = Math.floor((Math.random()* result[index].numeroDeCaras) + 1)
        }
      }
      console.log(result);
      setState(result);
    }

    const agregarDado = () =>{
      const myDados = [...cantidadDados,{numeroDeCaras: 4}];
      setcantidadDados(myDados)
      //console.log(cantidadDados);
      //console.log(state);
    }




  return (
    <div className="App">
      <p>hola</p>
      <button onClick={agregarDado}>incrementar dado</button>
        <div>
          <p>Pick your dice:</p>
        {cantidadDados.map((numeroDeCaras,index)=>{
          return <Dados
          key={index}
          id={index}
          numeroDeCaras={numeroDeCaras}
          />
        })}
        </div>
        <button onClick={tirarDados}>
        click
        </button>
    </div>
  );
}

export default Home;