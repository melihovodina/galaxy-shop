import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import * as userApi from '../../api/userApi'
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Window from '../../components/window/Window'
import MyButton from '../../components/myButton/MyButton';
import './profile.css'

const Profile = () => {
    const [email, setEmail] = useState()
    const [windowTitle, setWindowTitle] = useState('');
    const [windowMessage, setWindowMessage] = useState('');
    const { setIsVisible, setElements, setLoading, setIsLogged } = useContext(AppContext);
    const navigate = useNavigate();

    const fetchData = async (categoryId) => {
        try {
            setLoading(true)
            let response = await userApi.getUserById();
            setEmail(response.data)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setWindowMessage('Server is not responding now, try later');
            setWindowTitle('Error')
            setLoading(false)
            setIsVisible(true)
        }
      };

    useEffect(()=>{
        fetchData()
    },[])

    const exit = () => {
        Cookies.remove('token')
        setIsLogged(false);
        navigate('/signIn')
    }

    return (
        <div className='profile-main'>
            <FallingDots/>
            <Window/>
            <div className='profile-field'>
                <div className='profile-header'>
                <MyButton
                        className='profile-header-button'
                        scaleFrom={1}
                        scaleTo={1.2}
                        onClick={() => exit()}
                    >
                        <>Exit</>
                    </MyButton>
                    <MyButton
                        className='profile-header-button'
                        scaleFrom={1}
                        scaleTo={1.2}
                        onClick={() => navigate('/main')}
                    >
                        <>Return</>
                    </MyButton>
                    <p className='profile-header-name'>Galaxy Shop</p>
                </div>
            </div>
            <div className='profile-block'>
                <h1 className='product-email'>{email}</h1>
                <h2 className='product-orders'>Orders:</h2>
            </div>
        </div>
    )
}

export default Profile