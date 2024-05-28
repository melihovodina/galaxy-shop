import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './adminInt.css'

const AdminInt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get('secretKey')) {
      return navigate('/devLogin');
    }
    const handleBeforeUnload = () => {
      Cookies.remove('secretKey');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const exit = () => {
    Cookies.remove('secretKey')
    navigate('/main');
  }

  return (
    <div>
      <h1>Admin Interface</h1>
      <button onClick={exit}>exit</button>
    </div>
  );
};

export default AdminInt;