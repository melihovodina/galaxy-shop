import React, { useState, useEffect } from 'react'
import * as userApi from '../../api/userApi'
import Loading from '../Loading'
import MyButton from '../myButton/MyButton'
import MiniFieldListItem from './MiniFieldItem'
import './miniField.css'

const MiniField = ({ list }) => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getList()
        console.log(info)
    },[list])

    const getList = async () => {
        setLoading(true);
        let result
        switch (list) {
            case "Categories":
                result = await userApi.getCategories();
                setInfo(result)
                break;
            case 'Parametres':
                result = await userApi.getParameters();
                setInfo(result)
                break;
            case 'Types':
                result = await userApi.getTypes();
                setInfo(result)
                break;
            case 'Products':
                result = await userApi.getCatalog();
                setInfo(result)
                break;
            case 'Orders':
                result = await userApi.getOrders();
                setInfo(result)
                break;
            default:
                result = await userApi.getCategories();
                setInfo(result)
                break;
        }
        setLoading(false);
    }
    
    return (
        <div className='mini-field-main'>
            <div className='mini-field-list'>
            <Loading loading={loading} loadingClass="loading">
                <div className='mini-field-list loading'>
                {Array.isArray(info.data) && info.data.map((element) => (
                    <MiniFieldListItem key={element.id} element={element} />
                ))}
                </div>
            </Loading>
            </div>
            <div className='mini-field-buttons'>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick
                >
                    <>Create</>
                </MyButton>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick
                >
                    <>Update</>
                </MyButton>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick
                >
                    <>Delete</>
                </MyButton>
            </div>
        </div>
    )
}

export default MiniField