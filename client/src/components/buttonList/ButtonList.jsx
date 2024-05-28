import React from 'react'
import MyButton from '../myButton/MyButton'
import './buttonList.css'

const ButtonList = ({ buttons }) => {
  return (
    <div className='button-list-main'>
        {buttons.map((button) => 
            <MyButton 
            className='button-list-element'
            scaleFrom={1} 
            scaleTo={1.2}
            onClick={button.onClick}
          >
            <>{button.text}</>
          </MyButton>
        )}
    </div>
  )
}

export default ButtonList