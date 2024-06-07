import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'

const PhoneListItem = ({ item }) => {
  const { setItem, isLogged } = useContext(AppContext)
  const navigate = useNavigate()

  const handleClick = () => {
    setItem(item) 
    navigate('/product')
  }
  
  return (
    <div className='phone-list-item-main' onClick={() => handleClick()}>
        <img className='phone-list-item-image' src={item.imageLinks} alt={item.name}/>
        <div className='phone-list-item-text'>
          <h1 className='phone-list-item-name'>{item.name}</h1>
          <p className='phone-list-item-price'>{item.price}$</p>
        </div>
    </div>
  )
}

export default PhoneListItem