import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isVisible,  setIsVisible] = useState(false);
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
    if (Cookies.get('token')!== undefined) {
      setIsLogged(true);
    }
  }, []);

  return (
    <AppContext.Provider value={{ isLogged, setIsLogged, isVisible, setIsVisible, elements, setElements }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };