import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/signIn')}>Sign In</button>
      <button onClick={() => navigate('/signUp')}>Sign Up</button>
      <button onClick={() => navigate('/devLogin')}>For developes</button>
    </div>
  )
}

export default Main