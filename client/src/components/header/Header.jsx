import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { AuthContext } from '../AuthContext';
import MyButton from '../myButton/MyButton'
import './header.css'

const Header = () => {
    const { isLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className='header'>
           {isLogged? (
                <MyButton 
                className='header-button-profile'
                childrenClassName='header-profile'
                scaleFrom={1} 
                scaleTo={1.2}
                childrenScaleFrom={1.7}
                childrenScaleTo={1.9}
                childrenScaleFromForBig={2} 
                childrenScaleToForBig={2.2} 
                onClick={() => navigate('/profile')}
                >
                  <PersonRoundedIcon/>
                </MyButton>
            ) : (
                <>
                    <MyButton 
                    className='header-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    childrenScaleFromForBig={2} 
                    childrenScaleToForBig={2.2} 
                    onClick={() => navigate('/signIn')}
                    >
                        <>Sign In</>
                    </MyButton>
                    <MyButton 
                    className='header-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    childrenScaleFromForBig={2} 
                    childrenScaleToForBig={2.2} 
                    onClick={() => navigate('/cart')}
                    >
                        <>Cart</>
                    </MyButton>
                </>
            )}
            <MyButton 
                className='header-button'
                scaleFrom={1} 
                scaleTo={1.2}
                childrenScaleFromForBig={2} 
                childrenScaleToForBig={2.2} 
                onClick={() => navigate('/devLogin')}
            >
                <>adminka</>
            </MyButton>
            <div className='header-input-block'>
                <input className='header-input' placeholder='Search'/>
            </div>
            <p className='header-name'>Galaxy Shop</p>
        </div>
    )
}

export default Header