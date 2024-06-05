import React, { useEffect, useState, useContext } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../AppContext'
import PhoneListModels from './PhoneListModels'
import PhoneListItem from './PhoneListItem'
import Loading from '../Loading'
import './phoneList.css'

const PhoneList = ( { items, setItems, categoryId, fetchDataItems } ) => {
    const [types, setTypes] = useState([])
    const { setIsVisible, loading } = useContext(AppContext);

    const fetchData = async (categoryId) => {
        try {
            const response = await userApi.getTypesByCategoryId(categoryId)
            setTypes(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsVisible(true)
        }
    };

    useEffect(() => {
        if (categoryId.length > 0) {
          fetchData(categoryId);
          fetchDataItems(categoryId);
        }
      }, [categoryId]);

    return (
        <div className='phone-list-main'>
            <PhoneListModels types={types} setItems={setItems} items={items}/>
            <Loading loading={loading} loadingClass="loading">
                <div className='phone-list-items loading'>
                    {items.map((item) => (<PhoneListItem item={item}/>))}
                </div>
            </Loading>
        </div>
    )
}

export default PhoneList 