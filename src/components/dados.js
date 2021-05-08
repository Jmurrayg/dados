import React, { useState,useContext, useEffect } from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import {DadosContext} from '../contex/DadosContex';


function Dados({id}) {
  
   const[ state, setState] = useContext(DadosContext);

    const [caras, setCaras] = useState(4)
/*     const [resultado, setResultado] = useState(); 
    const tirarDado = () =>{
      //console.log("vengo del state",caras)
      const valor = Math.floor((Math.random()* caras) + 1)
      if(resultado !== valor){
        setResultado(valor);
      }else{
        console.log(valor);
        tirarDado();
      };

    } */

    const result = state[id].resultado

    const primerCara = () =>{
      const check = [...state];
      console.log(check[id]);
      if(check[id] === undefined){
        //console.log("vengo del check if")
        const myDice = [...state,{numeroDeCaras: 4}]
        setState(myDice)
      } else{
        //console.log("vengo del check else")
        check[id].numeroDeCaras = 4;
        setState(check);
      }
    }

    useEffect(() => {
      setTimeout(primerCara,10)
    }, [])

    const cambiarCaras = (e) =>{
      const numeroCaras = e.target.value;
      //console.log(id,numeroCaras);
      setCaras(numeroCaras);
      
      const check = [...state];
      //console.log(check[id]);
      if(check[id] === undefined){
        //console.log("vengo del check if")
        const myDice = [...state,{numeroDeCaras: numeroCaras}]
        setState(myDice)
      } else{
       // console.log("vengo del check else")
        check[id].numeroDeCaras = numeroCaras;
        setState(check);
      }
      
      //setState({...state,numeroCaras})
      //console.log("vengo del context",state);
    }

   
    const dadoi = <FontAwesomeIcon icon={faDiceD6}/>
    return (
      <div className="App">
        <p>{id}</p>
        {dadoi}
        {result}
          <select value={caras} onChange={(e)=> cambiarCaras(e)}>
            <option value={4}>cuatro caras</option>
            <option value={6}>seis caras</option>
            <option value={8}>ocho caras</option>
            <option value={9}>nueve caras</option>
            <option value={12}>doce caras</option>
            <option value={20}>veinte caras</option>
          </select>
      </div>
    );
  }

  export default Dados;