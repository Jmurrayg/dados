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

      result.forEach(result => {
        const valor = Math.floor((Math.random()* result.numeroDeCaras) + 1)
        if(valor !== result.resultado ){
          result.resultado = valor
        }else{
          result.resultado = Math.floor((Math.random()* result.numeroDeCaras) + 1)
        }
      });
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
    <>

        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div  className="container mx-auto">
                <div style={{backgroundColor: "#bdc3c7"}} className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-black dark:text-gray-200">Escoge tus dados</h1>
                  {
                    isNaN(totalDados)
                    ?<h2 className="my-3 text-2xl font-semibold text-black dark:text-gray-200">Lanza los dados para obtener tu resultado</h2>
                    :<h2 className="my-3 text-2xl font-semibold text-black dark:text-gray-200">Tu total de esta tirada: {totalDados}</h2>
                  }
                    </div>
                  <div className="flex justify-center ">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mr-4" onClick={agregarDado}>+1 Dado</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center" onClick={quitarDado}>-1 Dado</button>
                  </div>
                    <div>
                    {cantidadDados.map((numeroDeCaras,index,resultado)=>{
                      return <Dados
                      key={index}
                      id={index}
                      numeroDeCaras={numeroDeCaras}
                      resultado={resultado}
                      />
                    })}
                    </div>
                    <div className="felx mx-36 w-full justify-center">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={tirarDados}>
                      Lanzar Dados
                      </button>
                    </div>
                </div>
            </div>
        </div>




    </>
  );
}

export default Home;


