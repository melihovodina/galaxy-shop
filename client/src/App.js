import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import AppRouter from './router/AppRouter';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;