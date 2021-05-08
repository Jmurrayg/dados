/* eslint-disable import/no-anonymous-default-export */
import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState([{}]);
    return (            
            <DadosContext.Provider value={[state,setState]}>
                {children}
            </DadosContext.Provider>  
    );
}

export const DadosContext = createContext();