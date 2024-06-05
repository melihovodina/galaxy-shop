import React, { useState, useEffect, useContext } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Header from '../../components/header/Header';
import PhoneList from '../../components/phoniList/PhoneList';
import Window from '../../components/window/Window'
import './main.css'

const Main = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [windowMessage, setWindowMessage] = useState('');
  const { setIsVisible, setElements, setLoading } = useContext(AppContext);

  const getFirstCategory = async () => {
    let response = []
    try {
        response = await userApi.getCategories();
        setCategories(response.data)
        setCategoryId(response.data[0].id)
    } catch (error) {
        console.error('Error fetching data:', error);
        setWindowMessage('Server is not responding now, try later');
        setIsVisible(true)
    }
    fetchData(response.data[0].id)
  }

  const fetchData = async (categoryId) => {
    try {
        setLoading(true)
        let response = await userApi.getByCategory(categoryId);
        setItems(response.data);
        setLoading(false)
    } catch (error) {
        console.error('Error fetching data:', error);
        setWindowMessage('Server is not responding now, try later');
        setLoading(false)
        setIsVisible(true)
    }
  };

  useEffect(() => {
    getFirstCategory();
  }, []);

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
      <Header 
        setItems={setItems} 
        fetchData={fetchData} 
        categories={categories}
        setCategoryId={setCategoryId}
      />
      <PhoneList 
        items={items} 
        setItems={setItems}
        categoryId={categoryId}
        fetchDataItems={fetchData} 
      />
    </div>
  )
}

export default Main