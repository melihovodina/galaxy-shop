import React from 'react'
import { useNavigate } from 'react-router-dom';
import FallingDots from '../../components/fallingDots/FallingDots';
import Header from '../../components/header/Header';
import './main.css'

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <FallingDots/>
      <Header/>
    </div>
  )
}

export default Main