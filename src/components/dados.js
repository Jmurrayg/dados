import React, {useState} from 'react';

function Dados() {
  
    const [caras, setCaras] = useState(6)
    const [resultado, setResultado] = useState();
  
    const tirarDado = () =>{
      const valor = Math.floor((Math.random()* caras) + 1)
      if(resultado !== valor){
        console.log('no me repeti');
        console.log(valor)
        setResultado(valor);
      }else{
        console.log('me repeti')
        console.log(valor);
        tirarDado();
      };
    }
  
    return (
      <div className="App">
        <label>
          pick your dice:
          <select value={caras} onChange={(e)=> setCaras(e.target.value)}>
            <option value={4}>cuatro caras</option>
            <option value={6}>seis caras</option>
            <option value={8}>ocho caras</option>
            <option value={9}>nueve caras</option>
            <option value={12}>doce caras</option>
            <option value={20}>veinte caras</option>
          </select>
        </label>
        <button onClick={()=>{
          console.log("vengo de el state caras",caras);
          tirarDado();
  
  
        }}>consigue tu numero</button>
      </div>
    );
  }

  export default Dados;