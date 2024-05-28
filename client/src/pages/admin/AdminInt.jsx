import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as adminApi from '../../api/adminApi'
import MyButton from '../../components/myButton/MyButton';
import ButtonList from '../../components/buttonList/ButtonList';
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

  const buttons = [
    {onClick: async () => navigate('/main'), text: 'Categories'},
    {onClick: async () => navigate('/main'), text: 'Parametres'},
    {onClick: async () => navigate('/main'), text: 'Types'},
    {onClick: async () => navigate('/main'), text: 'Products'},
    {onClick: async () => navigate('/main'), text: 'Orders'},
  ];

  return (
    <div className='admin-main'>
      <div className='admin-field'>
        <div className='admin-header'>
          <h1 className='admin-title'>Admin Interface</h1>
          <MyButton 
            className='admin-exit-button'
            scaleFrom={1} 
            scaleTo={1.2}
            onClick={() => exit()}
          >
            <>Exit</>
          </MyButton>
        </div>
        <ButtonList buttons={buttons}/>
      </div>
    </div>
  );
};

export default AdminInt;