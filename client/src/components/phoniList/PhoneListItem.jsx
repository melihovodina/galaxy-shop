import React from 'react'
const PhoneListItem = ({ item }) => {
  return (
    <div className='phone-list-item-main'>
        <img className='phone-list-item-image' src={item.imageLinks} alt={item.name}/>
        <div className='phone-list-item-text'>
          <h1 className='phone-list-item-name'>{item.name}</h1>
          <p className='phone-list-item-price'>{item.price}$</p>
        </div>
    </div>
  )
}

export default PhoneListItem