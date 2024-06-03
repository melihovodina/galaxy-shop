//fix images
import React, { useState, useContext, useEffect } from 'react'
import * as adminApi from '../../../api/adminApi'
import { AppContext } from '../../AppContext'
import MyButton from '../../myButton/MyButton'

const Products = ({ windowDisplay }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [discount, setDiscount] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [images, setImages] = useState([])
    const [typeId, setTypeId] = useState('')
    const [paramValues, setParamValues] = useState([])
    const [id, setId] = useState('')
    const [windowMessage, setWindowMessage] = useState('')
    const [windowTitle, setWindowTitle] = useState('')
    const { setIsVisible, setElements } = useContext(AppContext);

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

    const save = async () => {
        switch (windowDisplay) {
            case 'Create':
                try {
                    const result = await adminApi.createProduct(name, description, price, discount, quantity, images, typeId, paramValues)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You created a product')
                        setIsVisible(true)
                    }
                } catch (error) {
                    setWindowTitle('Error')
                    setWindowMessage("Something gone wrong, check the console")
                    setIsVisible(true)
                    console.error('Error fetching data:', error);
                    throw error;
                }
                break;
            case 'Update':
                try {
                    const result = await adminApi.updateProduct(id, name, description, price, discount, quantity, images, typeId, paramValues)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You updated a product')
                        setIsVisible(true)
                    }
                } catch (error) {
                    setWindowTitle('Error')
                    setWindowMessage("Something gone wrong, check the console")
                    setIsVisible(true)
                    console.error('Error fetching data:', error);
                    throw error;
                }
                break;
            case 'Delete':
                try {
                    const result = await adminApi.deleteProduct(id)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You deleted a product')
                        setIsVisible(true)
                    }
                } catch (error) {
                    setWindowTitle('Error')
                    setWindowMessage("Something gone wrong, check the console")
                    setIsVisible(true)
                    console.error('Error fetching data:', error);
                    throw error;
                }
                break;
        }
    }

    return (
        <>  
            {windowDisplay !== 'Create' &&             
                <div className='mini-field-list-row loading'>
                    <p className='mini-field-list-text' style={{ fontSize: 30 }}>Id:</p>
                    <input
                        className='mini-field-list-redact-input'
                        placeholder='Empty'
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                </div>
            }
            {windowDisplay !== 'Delete' &&
                <> 
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Name:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Description:</p> 
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className='mini-field-list-redact-textarea'
                            placeholder='Empty' 
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Parameters values:</p> 
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className='mini-field-list-redact-textarea'
                            placeholder='Empty' 
                            value={paramValues} 
                            onChange={(event) => setParamValues(event.target.value.split(','))}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Type id:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={typeId} 
                            onChange={(event) => setTypeId(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Price:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={price} 
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Discount:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={discount} 
                            onChange={(event) => setDiscount(event.target.value)}
                        />
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Quantity:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={quantity} 
                            onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Images:</p> 
                        <input 
                            type='file' 
                            multiple 
                            style={{marginTop: 12}} 
                            onChange={(event) => {
                                const files = event.target.files;
                                setImages(files);
                            }}
                        />
                    </div>
                </>
            }
            <MyButton 
                className='mini-field-button right'
                scaleFrom={1} 
                scaleTo={1.2}
                onClick={()=> save()}
            >
                <>Save</>
            </MyButton> 
        </>
    )
}

export default Products