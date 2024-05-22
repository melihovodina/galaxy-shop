import React from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import FallingDots from '../../components/fallingDots/FallingDots'
import './login.css'

const SignIn = () => {

  return (
    <div className='login-main'>
      <div className='login-field'>
        <FallingDots/>
        <h1 className='login-header'>Sign In</h1>
        <div className='login-block'>
          <input className='login-input'></input>
          <input className='login-input'></input>
          <button className='login-button'>
            <CheckRoundedIcon className='login-check' fontSize='large'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn