import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { confirmation } from '../../api/userApi';
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots'
import Loading from '../../components/Loading';
import MyButton from '../../components/myButton/MyButton';
import Window from '../../components/window/Window';
import './login.css'

const CodeConfirmation = () => {
  const [code, setCode] = useState();
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
      setLoading(true);
      console.log(code)
      const response = await confirmation(code);
      if (response.status === 200) {
        setLoading(false)
        navigate('/main')
      }
    } catch (error) {
      setLoading(false);
      setWindowMessage('Something gone wrong, try later')
      setLoading(false)
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
            <h1 className='login-title-up'>Confirmation</h1>
            <MyButton 
            className='login-exit-button'
            childrenClassName='login-cross'
            scaleFrom={1} 
            scaleTo={1.2}
            childrenScaleFromForBig={2} 
            childrenScaleToForBig={2.2} 
            colorFrom="white" 
            colorTo="rgb(233, 0, 0)"
            keyTrigger="Escape"
            onClick={() => navigate('/main')}
            >
              <CloseRoundedIcon/>
            </MyButton>
          </div>
          <input 
          className='login-input' 
          placeholder='Code'
          maxLength={32} 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          /> 
          <p className='login-text-code'>
            We have sent a confirmation code to your email
          </p>
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
            keyTrigger="Enter"
            onClick={() => handleSubmit()}
          >
            <CheckRoundedIcon fontSize='large'/>
          </MyButton>
        </div>
      </Loading>
    </div>
  )
}

export default CodeConfirmation