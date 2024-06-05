import React, { useState, useEffect, useContext } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Header from '../../components/header/Header';
import PhoneList from '../../components/phoniList/PhoneList';
import Window from '../../components/window/Window'
import './main.css'
import Loading from '../../components/Loading';

const Main = () => {
  const [items, setItems] = useState([]);
  const [windowMessage, setWindowMessage] = useState('');
  const { setIsVisible, setElements } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
          let response = await userApi.getCatalog();
          setItems(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
          setWindowMessage('Server is not responding now, try later');
          setIsVisible(true)
      }
    };

    fetchData();
  },[])

  useEffect(() => {
    setElements([
      { type: 'h1', text: 'Error' },
      { type: 'p', text: windowMessage },
      { type: 'button',
        text: 'Ok',
        scaleFrom: 1,
        scaleTo: 1.2,
        onClick: () => setIsVisible(false)
      },
    ]);
  }, [windowMessage]);

  return (
    <div className='main'>
      <FallingDots/>
      <Window/>
      <Header/>
      <PhoneList items={items} setItems={setItems}/>
    </div>
  )
}

export default Main