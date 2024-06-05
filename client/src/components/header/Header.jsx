import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userApi from '../../api/userApi'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { AppContext } from '../AppContext';
import MyButton from '../myButton/MyButton';
import './header.css';
import HeaderCategories from './HeaderCategories';

const Header = ({ setItems, fetchData, categories, setCategoryId }) => {
    const [menuOpen, setMenuOpen] = useState('');
    const { isLogged } = useContext(AppContext);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        if(menuOpen === '' || menuOpen === 'closed') {
            setMenuOpen('opened');
        } else {
            setMenuOpen('closed');
        }
    };

    return (
        <div className='header'>
            {isLogged ? (
                <>
                    <MyButton
                        className='header-button-profile'
                        childrenClassName='header-profile'
                        scaleFrom={1}
                        scaleTo={1.2}
                        childrenScaleFrom={1.7}
                        childrenScaleTo={1.9}
                        onClick={() => navigate('/profile')}
                    >
                        <PersonRoundedIcon fontSize='large' />
                    </MyButton>
                </>
            ) : (
                <>
                    <MyButton
                        className='header-button'
                        scaleFrom={1}
                        scaleTo={1.2}
                        onClick={() => navigate('/signIn')}
                    >
                        <>Sign In</>
                    </MyButton>
                </>
            )}
            <div className='header-input-block'>
                <MyButton
                className='header-button-categories'
                scaleFrom={1}
                scaleTo={1.2}
                childrenClassName={`header-button-arrow ${
                    menuOpen === 'opened' ? 'rotated' 
                    : menuOpen === 'closed' ? 'not-rotated' : ''}`}
                onClick={handleMenuClick}
                >
                    <KeyboardArrowUpRoundedIcon fontSize='large' />
                </MyButton>
                <input className='header-input' placeholder='Search by id' />
            </div>
            <p className='header-name'>Galaxy Shop</p>
            <div className={`header-dropdown-menu ${
                menuOpen === 'opened' ? 'header-opened' 
                : menuOpen === 'closed' ? 'header-closed' : ''}`}>
                    <h1 className='header-dropdown-menu-name'>Categories</h1>
                    <div className='header-dropdown-menu-field'>
                        {categories.map((category) => (
                            <HeaderCategories
                                category={category} 
                                setItems={setItems} 
                                fetchData={fetchData}
                                setCategoryId={setCategoryId}
                            />
                        ))}
                    </div>  
            </div>
        </div>
    );
};

export default Header;