import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { AppContext } from '../AppContext';
import MyButton from '../myButton/MyButton';
import './header.css';
import HeaderCategories from './HeaderCategories';

const Header = ({ items, setFilteredItems, categories, setCategoryId, setWindowMessage, setWindowTitle }) => {
    const [menuOpen, setMenuOpen] = useState('');
    const { isLogged, setIsLogged, setIsVisible } = useContext(AppContext);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (!searchTerm) {
            setFilteredItems([]);
        } else {
            const filtered = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            if(filtered.length > 0) {
            setFilteredItems(filtered);
            } else {
                setWindowMessage('Not Found');
                setWindowTitle('')
                setIsVisible(true);
            }
        }
    };

    const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    };

    const handleMenuClick = () => {
        if(menuOpen === '' || menuOpen === 'closed') {
            setMenuOpen('opened');
        } else {
            setMenuOpen('closed');
        }
    };

    const exit = () => {
        Cookies.remove('token')
        setIsLogged(false);
        navigate('/signIn')
    }

    return ( 
        <div className='header'>
            {isLogged ? (
                <>
                    <MyButton
                        className='header-button'
                        scaleFrom={1}
                        scaleTo={1.2}
                        onClick={() => exit}
                    >
                        <>Exit</>
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
            <MyButton
                className='header-button'
                scaleFrom={1}
                scaleTo={1.2}
                onClick={() => navigate('/about')}
            >
                <>About</>
            </MyButton>
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
                <input
                    className='header-input'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <MyButton
                className='header-button-categories'
                scaleFrom={1}
                scaleTo={1.2}
                childrenScaleFromForBig={1.5}
                childrenScaleToForBig={1.7}
                childrenClassName={'header-button-check'}
                colorFrom="white" 
                colorTo="rgb(140, 233, 0)"
                keyTrigger="Enter"
                onClick={handleSearch}
                >
                    <CheckRoundedIcon/>
                </MyButton>
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