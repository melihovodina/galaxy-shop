import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { AuthContext } from '../AuthContext';
import './header.css'

const Header = () => {
    const { isLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className='header'>
           {isLogged? (
                <button className='header-button-profile' onClick={() => navigate('/profile')}>
                    <PersonRoundedIcon className='header-profile'/>
                </button>
            ) : (
                <>
                    <button className='header-button' onClick={() => navigate('/signIn')}>Sign In</button>
                    <button className='header-button' onClick={() => navigate()}>Cart</button>
                </>
            )}
            <div className='header-input-block'>
                <input className='header-input' placeholder='Search'/>
            </div>
            <p className='header-name'>Galaxy Shop</p>
        </div>
    )
}

export default Header