import React from 'react'
import MyButton from '../myButton/MyButton'
import './buttonList.css'

const ButtonList = ({ buttons, setList }) => {
  const handleClick = (buttonText) => {
    const listValues = {
      Categories: 'categories',
      Parametres: 'parametres',
      Types: 'types',
      Products: 'products',
      Orders: 'orders',
    };
    setList(listValues[buttonText]);
  };

  return (
    <div className='button-list-main'>
      {buttons.map((button) => (
        <MyButton
          className='button-list-element'
          scaleFrom={1}
          scaleTo={1.2}
          onClick={() => handleClick(button.text)}
        >
          <>{button.text}</>
        </MyButton>
      ))}
    </div>
  );
};

export default ButtonList