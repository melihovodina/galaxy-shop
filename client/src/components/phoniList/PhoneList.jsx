import React, { useEffect, useState, useContext } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../AppContext'
import PhoneListModels from './PhoneListModels'
import PhoneListItem from './PhoneListItem'
import Loading from '../Loading'
import './phoneList.css'

const PhoneList = ( { items, setItems} ) => {
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(false)
    const { setIsVisible } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await userApi.getTypes()
                setTypes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsVisible(true)
            }
        };
      
        fetchData();
    }, []);

    return (
        <div className='phone-list-main'>
            <PhoneListModels types={types} setItems={setItems} setLoading={setLoading} items={items}/>
            <Loading loading={loading} loadingClass="loading">
                <div className='phone-list-items loading'>
                    {items.map((item) => (<PhoneListItem item={item}/>))}
                </div>
            </Loading>
        </div>
    )
}

export default PhoneList 