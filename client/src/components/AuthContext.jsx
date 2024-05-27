import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'

const AuthContext = createContext();

// Создаем компонент AuthProvider, который оборачивает дочерние компоненты и предоставляет им контекст аутентификации
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // залогинен ли пользователь
  useEffect(() => {
    if (Cookies.get('token')!== undefined) {
      setIsLogged(true);
    }
  }, []);

  return ( // Возвращаем компонент, который оборачивает дочерние компоненты и предоставляет им контекст аутентификации через значение value
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };