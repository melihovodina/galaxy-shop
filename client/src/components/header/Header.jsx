import React from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <button className='header-button' onClick={() => navigate('/signIn')}>Sign In</button>
            <button className='header-button' onClick={() => navigate('/admin')}>Cart</button>
            <div className='header-input-block'>
                <input className='header-input' placeholder='Search'/>
            </div>
            <p className='header-name'>Galaxy Shop</p>
        </div>
    )
}

export default Header