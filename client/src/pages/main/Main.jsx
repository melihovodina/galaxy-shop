import React from 'react'
import { useNavigate } from 'react-router-dom';
import FallingDots from '../../components/fallingDots/FallingDots';
import './main.css'

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <FallingDots/>
      <div className='main-header'>
        <button className='main-header-button' onClick={() => navigate('/signIn')}>Sign In</button>
        <button className='main-header-button' onClick={() => navigate()}>Cart</button>
        <p className='main-header-name'>Galaxy Shop</p>
      </div>
    </div>
  )
}

export default Main