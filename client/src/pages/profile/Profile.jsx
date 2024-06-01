import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AppContext } from '../../components/AppContext';
import MyButton from '../../components/myButton/MyButton';
import './profile.css'

const Profile = () => {
    const { setIsLogged } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        Cookies.remove('token')
        setIsLogged(false);
        navigate('/signIn')
    }

    return (
        <div className='profile'>
            <button onClick={() => handleSubmit()}>Exit</button>
            <MyButton scaleFrom={1} scaleTo={2} colorFrom="blue" colorTo="rgba(52, 52, 52, 0.8);">
                <p>Hover over me!</p>
            </MyButton>
        </div>
    )
}

export default Profile