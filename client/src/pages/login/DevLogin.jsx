import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { checkKey, secretKey } from '../../api/adminApi'
import FallingDots from '../../components/fallingDots/FallingDots'
import Loading from '../../components/Loading';
import './login.css'

const DevLogin = () => {
  const [writtenKey, setWrittenKey] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true)
      secretKey = writtenKey
      const response = await checkKey();
      setLoading(false);
      if (response.status === 200) {
        Cookies.set('secretKey', writtenKey, {expires: 1})
        navigate('/admin')
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  return (
    <div className='login-main'>
      <FallingDots/>
      <Loading loading={loading} loadingClass="loading">
        <div className='login-field loading'>
          <div className='login-header'>
            <h1 className='login-title'>dev mode</h1>
            <button className='login-exit-button' onClick={() => navigate('/main')}>
              <CloseRoundedIcon className='login-cross'/>
            </button>
          </div>
          <input 
          className='login-input' 
          type='password' 
          placeholder='Secret Key' 
          maxLength={32}
          value={writtenKey}  
          onChange={(e) => setWrittenKey(e.target.value)}
          />
          <button className='login-button' onClick={() => handleSubmit()}>
            <CheckRoundedIcon className='login-check' fontSize='large'/>
          </button>
        </div>
      </Loading>
    </div>
  )
}

export default DevLogin