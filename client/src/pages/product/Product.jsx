import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { createOrder } from '../../api/userApi';
import { AppContext } from '../../components/AppContext';
import FallingDots from '../../components/fallingDots/FallingDots';
import Window from '../../components/window/Window'
import MyButton from '../../components/myButton/MyButton';
import Loading from '../../components/Loading';
import './product.css'

const Product = () => {
    const [windowTitle, setWindowTitle] = useState('');
    const [windowMessage, setWindowMessage] = useState('');
    const { item, setItem, setIsVisible, setLoading, loading, setElements, isLogged } = useContext(AppContext);
    const navigate = useNavigate()

    useEffect(() => {
        const cookieItem = Cookies.get('item');
        if (cookieItem !== null && cookieItem !== item && item !== undefined) {
            Cookies.set('item', JSON.stringify(item));
        } else if (cookieItem !== null) {
          setItem(JSON.parse(cookieItem));
        }
    }, []);

    useEffect(() => {
        if(!item) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    },[item])

    useEffect(() => {
        setElements([
          { type: 'h1', text: windowTitle },
          { type: 'p', text: windowMessage },
          { type: 'button',
            text: 'Ok',
            scaleFrom: 1,
            scaleTo: 1.2,
            onClick: () => setIsVisible(false)
          },
        ]);
      }, [windowMessage]);

    const order = async () => {
        if(isLogged) {
            const orders = [
                {
                "id": item.id,
                "size": "1"
                }
            ]
            try {
                setLoading(true)
                let response = await createOrder(orders);
                if (response.status === 200) {
                    setLoading(false)
                    setWindowMessage('The order has been created, specialist will soon send you an email');
                    setWindowTitle('Succes')
                    setIsVisible(true)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setWindowMessage('Server is not responding now, try later');
                setWindowTitle('Error')
                setLoading(false)
                setIsVisible(true)
            }
        } else {
            setWindowMessage('To place an order you need to sign in');
            setWindowTitle('Warning')
            setIsVisible(true)
        }
    }

    const underlineEffect = (event) => {
        const target = event.target;
        const buttons = document.querySelectorAll('.product-parameters-tbut');
        buttons.forEach((button) => button.classList.remove('active'));
        target.classList.toggle("active");
    };

    return (
        <div className='product-main'>
            <FallingDots/>
                <Loading loading={loading} loadingClass="loading">
                <div className='product-field loading'>
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
                    {!item && <Loading loading={loading} loadingClass="loading"/>}
                    {item &&
                        <div className='product'>
                            <div className='product-image-block'>
                                <h1 className='product-name'>{item.name}</h1>
                                <img className='product-image' src={item.imageLinks} alt={item.name}/>
                            </div>
                            <div className='product-info'>
                                <div className='product-description-block'>
                                    <div className='product-center-block'>
                                        <h2 className='product-characteristics'>Characteristics</h2>
                                    </div>
                                    <p className='product-description'>
                                        {item.description.split('; ').map((param, index) => (
                                            <span className='product-description-parameter' key={index}>{param}<br/></span>
                                        ))}
                                    </p>
                                </div>
                                <div className='product-parameters-price-block'>
                                    <div className='product-parameters-block'>
                                        <div className='product-center-block'>
                                            <h2 className='product-parameters-title'>Select Options</h2>
                                        </div>
                                        {/*recode*/}
                                        <div className='product-parameters'>
                                            <p className='product-parameters-text'>{item.paramValues[0][0]}</p>
                                            {item.paramValues[0].slice(1).map((value) => (
                                                <p className='product-parameters-tbut' onClick={(event)=>underlineEffect(event)}>{value}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='product-price-block'>
                                    <h2 className='product-price'>Total price: </h2>
                                        <p className='product-price'>{item.price}$</p>
                                    </div>
                                </div>
                                <MyButton
                                    className='product-button'
                                    scaleFrom={1}
                                    scaleTo={1.2}
                                    onClick={() => order()}
                                >
                                    <>Order</>
                                </MyButton>
                            </div>
                        </div>
                    }
                </div>
            </Loading>
        </div>
    )
}

export default Product