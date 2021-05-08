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
      const myDados = [...cantidadDados,{resultado: 0,numeroDeCaras: 4}];
      setcantidadDados(myDados);
      setState(myDados);
      //console.log(cantidadDados);
      //console.log(state);
    }

    const quitarDado = () =>{
      const myDados = [...cantidadDados];
      const myDadosState = [...state];
      myDadosState.pop();
      myDados.pop();
      //console.log(myDados);
      setcantidadDados(myDados);
      setState(myDadosState);
    }


    const totalDados = state.reduce((acc, curr) => acc + curr.resultado, 0);


  return (
    <div className="App">
      <p>tu total: {totalDados}</p>
      <button onClick={agregarDado}>incrementar dado</button>
      <button onClick={quitarDado}>quitar un dado</button>
        <div>
          <p>Pick your dice:</p>
        {cantidadDados.map((numeroDeCaras,index,resultado)=>{
          return <Dados
          key={index}
          id={index}
          numeroDeCaras={numeroDeCaras}
          resultado={resultado}
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