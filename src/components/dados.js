import React, { useState,useContext, useEffect } from 'react';
/* import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'; */
import {DadosContext} from '../contex/DadosContex';
import { Icon, InlineIcon } from '@iconify/react';
import diceD4 from '@iconify-icons/mdi/dice-d4';
import diceD6 from '@iconify-icons/mdi/dice-d6';
import diceD8 from '@iconify-icons/mdi/dice-d8';
import diceD10 from '@iconify-icons/mdi/dice-d10';
import diceD12 from '@iconify-icons/mdi/dice-d12';
import diceD20 from '@iconify-icons/mdi/dice-d20';


function Dados({id}) {
  
   const[ state, setState] = useContext(DadosContext);
   const[icono,setIcono] = useState(<Icon icon={diceD4} width="32px"/>)

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
      //console.log(check[id]);
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
      
      if (numeroCaras === "4") {
        setIcono(<Icon icon={diceD4} width="32px"/>);
      }if (numeroCaras === "6") {
        setIcono(<Icon icon={diceD6} width="32px"/>);
      }if (numeroCaras === "8") {
        setIcono(<Icon icon={diceD8} width="32px"/>);
      }if (numeroCaras === "10") {
        setIcono(<Icon icon={diceD10} width="32px"/>);
      }if (numeroCaras === "12") {
        setIcono(<Icon icon={diceD12} width="32px"/>);
      }if (numeroCaras === "20") {
        setIcono(<Icon icon={diceD20} width="32px"/>);
      }

      //setState({...state,numeroCaras})
      //console.log("vengo del context",state);
    }



   
    //const dadoi = <FontAwesomeIcon icon={faDiceD6}/>
    return (
      <div className="App">
        <div className="text-center">
        <h3 className="mb-3 text-2xl font-semibold text-black dark:text-gray-200">Resultado del dado: {result}</h3>
        </div>
        <div class="flex relative w-64 my-2 mx-16">
         {icono}
            <select value={caras} onChange={(e)=> cambiarCaras(e)}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value={4}>Cuatro caras</option>
              <option value={6}>Seis caras</option>
              <option value={8}>Ocho caras</option>
              <option value={10}>Diez caras</option>
              <option value={12}>Doce caras</option>
              <option value={20}>Veinte caras</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
      </div>
    );
  }

  export default Dados;