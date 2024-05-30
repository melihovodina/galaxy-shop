import React, { useState, useEffect } from 'react'
import * as userApi from '../../api/userApi'
import Loading from '../Loading'
import MyButton from '../myButton/MyButton'
import MiniFieldListItem from './MiniFieldItem'
import './miniField.css'
import MiniFieldRedact from './MiniFieldRedact'

const MiniField = ({ list }) => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false);
    const [windowDisplay, setWindowDisplay] = useState('list');

    useEffect(() => {
        getList()
    },[list])

    const getList = async () => {
        setLoading(true);
        setWindowDisplay('List');
        let result
        switch (list) {
            case "categories":
                result = await userApi.getCategories();
                setInfo(result)
                break;
            case 'parametres':
                result = await userApi.getParameters();
                setInfo(result)
                break;
            case 'types':
                result = await userApi.getTypes();
                setInfo(result)
                break;
            case 'products':
                result = await userApi.getCatalog();
                setInfo(result)
                break;
            case 'orders':
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
                    {windowDisplay === 'List'? (
                        Array.isArray(info.data) && info.data.map((element) => (
                            <MiniFieldListItem key={element.id} element={element} />
                        ))
                    ) : (
                        <MiniFieldRedact windowDisplay={windowDisplay} list={list}/>
                    )}
                </div>
            </Loading>
            </div>
            <div className='mini-field-buttons'>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick={()=>setWindowDisplay('Create')}
                >
                    <>Create</>
                </MyButton>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick={()=>setWindowDisplay('Update')}
                >
                    <>Update</>
                </MyButton>
                <MyButton 
                    className='mini-field-button'
                    scaleFrom={1} 
                    scaleTo={1.2}
                    onClick={()=>setWindowDisplay('Delete')}
                >
                    <>Delete</>
                </MyButton>
            </div>
        </div>
    )
}

export default MiniField