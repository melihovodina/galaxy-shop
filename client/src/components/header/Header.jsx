import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { AppContext } from '../AppContext';
import MyButton from '../myButton/MyButton'
import './header.css'

const Header = () => {
    const { isLogged } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='header'>
           {isLogged? (
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
                        <PersonRoundedIcon/>
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
                        childrenClassName='header-button-arrow'
                    >
                        <KeyboardArrowUpRoundedIcon fontSize='large'/>
                    </MyButton>        
                <input className='header-input' placeholder='Search by id'/>
            </div>
            <p className='header-name'>Galaxy Shop</p>
        </div>
    )
}

export default Header