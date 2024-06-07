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
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [windowTitle, setWindowTitle] = useState('');
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
        setWindowTitle('Error')
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
        setWindowTitle('Error')
        setLoading(false)
        setIsVisible(true)
    }
  };

  useEffect(() => {
    getFirstCategory();
  }, []);

  useEffect(() => {
    setElements([
      { type: 'h1', text: windowTitle },
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
        items={items} 
        setItems={setItems}
        setFilteredItems={setFilteredItems} 
        fetchData={fetchData} 
        categories={categories}
        setCategoryId={setCategoryId}
        setWindowMessage={setWindowMessage}
        setWindowTitle={setWindowTitle}
      />
      <PhoneList 
        items={items} 
        setItems={setItems}
        filteredItems={filteredItems}
        categoryId={categoryId}
        fetchDataItems={fetchData}
        setWindowMessage={setWindowMessage}
        setWindowTitle={setWindowTitle} 
      />
    </div>
  )
}

export default Main