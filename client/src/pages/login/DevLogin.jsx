import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { checkKey } from '../../api/adminApi'
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots'
import Loading from '../../components/Loading';
import MyButton from '../../components/myButton/MyButton';
import Window from '../../components/window/Window';
import './login.css'

const DevLogin = () => {
  const [writtenKey, setWrittenKey] = useState('')
  const [windowMessage, setWindowMessage] = useState('');
  const { setIsVisible, setElements, loading, setLoading } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setElements([
      { type: 'h1', text: 'Error' },
      { type: 'p', text: windowMessage },
      { type: 'button',
        text: 'Ok',
        scaleFrom: 1,
        scaleTo: 1.2,
        onClick: () => setIsVisible(false)
      },
    ]);
  }, [windowMessage]);

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await checkKey(writtenKey);
      setLoading(false);
      if (response.status === 200) {
        Cookies.set('secretKey', writtenKey, {expires: 1})
        navigate('/admin')
      }
    } catch (error) {
      setWindowMessage('Incorrect secret key')
      setLoading(false);
      setIsVisible(true)
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  return (
    <div className='login-main'>
      <FallingDots/>
      <Loading loading={loading} loadingClass="loading">
        <Window/>
        <div className='login-field loading'>
          <div className='login-header'>
            <h1 className='login-title'>dev mode</h1>
            <MyButton 
            className='login-exit-button'
            childrenClassName='login-cross'
            scaleFrom={1} 
            scaleTo={1.2}
            childrenScaleFromForBig={2} 
            childrenScaleToForBig={2.2} 
            colorFrom="white" 
            colorTo="rgb(233, 0, 0)"
            onClick={() => navigate('/main')}
            >
              <CloseRoundedIcon/>
            </MyButton>
          </div>
          <input 
          className='login-input' 
          type='password' 
          placeholder='Secret Key' 
          maxLength={32}
          value={writtenKey}  
          onChange={(e) => setWrittenKey(e.target.value)}
          />
          <MyButton 
            className='login-button'
            childrenClassName='login-check' 
            scaleFrom={1} 
            scaleTo={1.2}
            childrenScaleFrom={2} 
            childrenScaleTo={2.2}
            childrenScaleFromForBig={3} 
            childrenScaleToForBig={3.2} 
            colorFrom="white" 
            colorTo="rgb(140, 233, 0)"
            onClick={() => handleSubmit()}
          >
            <CheckRoundedIcon fontSize='large'/>
          </MyButton>
        </div>
      </Loading>
    </div>
  )
}

export default DevLogin