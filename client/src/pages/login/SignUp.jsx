import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { signUp } from '../../api/userApi';
import { AuthContext } from '../../components/AuthContext';
import FallingDots from '../../components/fallingDots/FallingDots'
import Loading from '../../components/Loading';
import MyButton from '../../components/myButton/MyButton';
import Window from '../../components/window/Window';
import './login.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [windowMessage, setWindowMassege] = useState('');
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const elements = [
    { type: 'h1', text: 'Error' },
    { type: 'p', text: windowMessage },
    { type: 'button',
      text: 'Ok',
      scaleFrom: 1,
      scaleTo: 1.2,
      onClick: () => setIsVisible(false)
    },
  ];

  const handleSubmit = async () => {
    if(email.length > 3 && password.length > 3) {
      try {
        setLoading(true);
        const response = await signUp(email, password);
        setLoading(false);
        if (response.status === 200) {
          setIsLogged(true)
          navigate('/main')
        }
      } catch (error) {
        setLoading(false);
        setWindowMassege('Something gone wrong, try later')
        setIsVisible(true)
        console.error('Error fetching data:', error);
        throw error;
      }
    } else {
      setWindowMassege('Email and password must contain from 3 to 32 characters')
      setIsVisible(true);
    }
  }

  return (
    <div className='login-main'>
      <FallingDots/>
      <Loading loading={loading} loadingClass="loading">
        <Window isVisible={isVisible} setIsVisible={setIsVisible} elements={elements}/>
        <div className='login-field loading'>
          <div className='login-header'>
            <h1 className='login-title-up'>Sign Up</h1>
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
          <p className='login-text' onClick={() => navigate('/signIn')}>
            Have an account? Sign in
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
            onClick={() => handleSubmit()}
          >
            <CheckRoundedIcon fontSize='large'/>
          </MyButton>
        </div>
      </Loading>
    </div>
  )
}

export default SignUp