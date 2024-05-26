import React, { createContext, useState } from 'react';

const AuthContext = createContext();

// Создаем компонент AuthProvider, который оборачивает дочерние компоненты и предоставляет им контекст аутентификации
const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // залогинен ли пользователь

  return ( // Возвращаем компонент, который оборачивает дочерние компоненты и предоставляет им контекст аутентификации через значение value
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };