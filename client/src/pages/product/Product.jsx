import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Window from '../../components/window/Window'
import MyButton from '../../components/myButton/MyButton';
import './product.css'

const Product = () => {
    const [windowMessage, setWindowMessage] = useState('');
    const { setIsVisible, setElements, item } = useContext(AppContext);
    const navigate = useNavigate()
    const description = item.description;
    const characteristics = {};
    const parts = description.replace("Characteristics:", "").trim().split(" ");
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].endsWith(":")) {
            const key = parts[i].slice(0, -1);
            const value = parts[i + 1];
            characteristics[key] = value;
            i++;
        }
    }

    return (
        <div className='product-main'>
            <FallingDots/>
            <div className='product-field'>
                <Window/>
                <div className='product-header'>
                        <MyButton
                            className='product-header-button'
                            scaleFrom={1}
                            scaleTo={1.2}
                            onClick={() => navigate('/main')}
                        >
                            <>Return</>
                        </MyButton>
                    <p className='product-header-name'>Galaxy Shop</p>
                </div>
                <div className='product'>
                    <img className='product-image' src={item.imageLinks} alt={item.name}/>
                    <div className='product-info'>
                        <h1 className='product-name'>{item.name}</h1>
                        <h2 className='product-characteristics'>Characteristics: </h2>
                        {Object.keys(characteristics).map((key, index) => (
                            <div key={index}>
                                <span>{key}: </span>
                                <span>{characteristics[key]}</span>
                            </div>
                        ))}
                        <p className='product-parameters'>{item.paramValues}</p>
                        <p className='product-price'>{item.price}$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product