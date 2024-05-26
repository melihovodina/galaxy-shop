import React, { useEffect } from 'react'
import { Routes, Route, useNavigate} from "react-router-dom";
import { Links } from '../router'
import Adminka from '../pages/adminka/Adminka';

function AppRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/main');
    }
  }, []);

  return (
    <Routes>
      {Links.map(route => {
        return (
          <Route
            element={React.createElement(route.component)}
            path={route.path}
            exact={route.exact}
            key={route.key}
          />
        );
      })}
      <Route path="/admin" element={<Adminka />} />
    </Routes>
  )
}

export default AppRouter