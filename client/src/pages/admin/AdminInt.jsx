import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import MyButton from '../../components/myButton/MyButton';
import ButtonList from '../../components/buttonList/ButtonList';
import './adminInt.css'
import MiniField from '../../components/miniField/MiniField';

const AdminInt = () => {
  const [list, setList] = useState('')
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
    {text: 'Categories'},
    {text: 'Parametres'},
    {text: 'Types'},
    {text: 'Products'},
    {text: 'Orders'},
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
        <div className='admin-work-zone'>
          <ButtonList buttons={buttons} setList={setList}/>
          <MiniField list={list}/>
        </div> 
      </div>
    </div>
  );
};

export default AdminInt;