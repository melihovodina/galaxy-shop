import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { signIn } from '../../api/userApi';
import FallingDots from '../../components/fallingDots/FallingDots'
import './login.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await signIn(email, password);
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
        <div className='login-header'>
          <h1 className='login-title'>Sign In</h1>
          <button className='login-exit-button' onClick={() => navigate('/main')}>
            <CloseRoundedIcon className='login-cross'/>
          </button>
        </div>
        <input 
        className='login-input' 
        placeholder='Email'
        maxLength={32} 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        /> 
        <input 
        className='login-input' 
        type='password' 
        placeholder='Password' 
        maxLength={32}
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <p className='login-text' onClick={() => navigate('/signUp')}>
          Don't have an account yet? Join to us
        </p>
        <button className='login-button' onClick={() => handleSubmit()}>
          <CheckRoundedIcon className='login-check' fontSize='large'/>
        </button>
      </div>
    </div>
  )
}

export default SignIn