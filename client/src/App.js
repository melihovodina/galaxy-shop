import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import AppRouter from './router/AppRouter';
import './index.css';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;