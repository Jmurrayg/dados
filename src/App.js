import './App.css';
import Dados from './components/dados';
import React, {useState} from 'react';

function App() {

  const [cantidadDados, setcantidadDados] = useState(1);

 
    let dados = [];
    for (let i = 0; i < cantidadDados; i++) {
      dados.push(<Dados key={i}/>)
    }




  return (
    <div className="App">
      <p>hola</p>
      <input type="text" placeholder="cantidad de dados" onChange={(e) => 
        setcantidadDados(e.target.value)}/>
      {dados}
    </div>
  );
}

export default App;
