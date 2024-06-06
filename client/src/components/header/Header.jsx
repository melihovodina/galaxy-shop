import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
                        childrenScaleFrom={1.3}
                        childrenScaleTo={1.5}
                        childrenScaleFromForBig={1.7}
                        childrenScaleToForBig={1.9}
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
                childrenScaleFromForBig={1.5}
                childrenScaleToForBig={1.7}
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
                                setCategoryId={setCategoryId}
                                setMenuOpen={setMenuOpen}
                            />
                        ))}
                    </div>  
            </div>
        </div>
    );
};

export default Header;