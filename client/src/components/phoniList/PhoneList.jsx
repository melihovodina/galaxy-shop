import React, { useEffect, useState, useContext } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../AppContext'
import PhoneListModels from './PhoneListModels'
import PhoneListItem from './PhoneListItem'
import Loading from '../Loading'
import './phoneList.css'

const PhoneList = ( { items, setItems, filteredItems, categoryId, fetchDataItems, setWindowMessage, setWindowTitle } ) => {
    const [types, setTypes] = useState([])
    const { setIsVisible, loading } = useContext(AppContext);

    const fetchData = async (categoryId) => {
        try {
            const response = await userApi.getTypesByCategoryId(categoryId)
            setTypes(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setWindowMessage('Server is not responding now, try later');
            setWindowTitle('Error')
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
            <PhoneListModels types={types} setItems={setItems} items={items} categoryId={categoryId}/>
            <Loading loading={loading} loadingClass="loading">
                <div className='phone-list-items loading'>
                    {!filteredItems.length && items.map((item) => (<PhoneListItem item={item}/>))}
                    {filteredItems.length > 0 && filteredItems.map((item) => (<PhoneListItem item={item}/>))}
                </div>
            </Loading>
        </div>
    )
}

export default PhoneList 