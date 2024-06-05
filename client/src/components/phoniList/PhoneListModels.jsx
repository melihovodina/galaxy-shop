import React, { useContext, useState } from 'react'
import * as userApi from '../../api/userApi'
import { AppContext } from '../AppContext'

const PhoneListModels = ({ types, setItems, setLoading }) => {
    const [chosen, setChosen] = useState([])
    const { setIsVisible } = useContext(AppContext);

    const fetchDataTypes = async (typeId) => {
        try {
            setLoading(true)
            let response = await userApi.getByType(typeId);
            setItems(prevItems => [...prevItems, ...response.data]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setIsVisible(true)
        }
    };

    const fetchDataCategories = async () => {
        try {
            setLoading(true)
            let response = await userApi.getCatalog();
            setItems(response.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            setIsVisible(true)
        }
    };

    const underlineEffect = (event) => {
        const target = event.target;
        target.classList.toggle("active");
    };

    const handleTextClick = (event) => {
        const target = event.target;
        const typeId = target.getAttribute('data-type-id');
        if (!chosen.includes(typeId)) {
            if (chosen.length === 0) {
                setItems([]);
            }
            fetchDataTypes(typeId);
            setChosen(prevChosen => [...prevChosen, typeId]);
        } else if (chosen.length === 1 && chosen[0] === typeId) {
            setItems([]);
            setChosen([]);
            fetchDataCategories()
        } else {
            setItems(prevItems => prevItems.filter(item => item.typeId !== typeId));
            setChosen(prevChosen => prevChosen.filter(id => id !== typeId));
        }
    };

    return (
        <div className='phone-list-models'>
            <h1 className='phone-list-models-name'>Choose a model</h1>
            {types.map((type) => (
                <div className='phone-list-models-types'>
                    <p className='phone-list-models-text' data-type-id={type.id} onClick={(event) => {
                        underlineEffect(event);
                        handleTextClick(event);
                    }}>
                        {type.name}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default PhoneListModels