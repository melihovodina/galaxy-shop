import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from '../../components/AuthContext';

const Profile = () => {
    const { setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        Cookies.remove('token')
        setIsLogged(false);
        navigate('/signIn')
    }

    return (
        <button onClick={() => handleSubmit()}>Exit</button>
    )
}

export default Profile