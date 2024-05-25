import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { checkKey } from '../../api/adminApi'
import FallingDots from '../../components/fallingDots/FallingDots'
import './login.css'

const DevLogin = () => {
  const [secretKey, setSecretKey] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await checkKey(secretKey);
      if (response.status === 200) {
        navigate('/main')
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  return (
    <div className='login-main'>
      <FallingDots/>
      <div className='login-field'>
        <input 
        className='login-input' 
        type='password' 
        placeholder='Secret Key' 
        maxLength={32}
        value={secretKey}  
        onChange={(e) => setSecretKey(e.target.value)}
        />
        <button className='login-button' onClick={() => handleSubmit()}>
          <CheckRoundedIcon className='login-check' fontSize='large'/>
        </button>
      </div>
    </div>
  )
}

export default DevLogin