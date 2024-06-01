import React, { useState, useContext, useEffect } from 'react'
import * as adminApi from '../../../api/adminApi'
import { AppContext } from '../../AppContext'
import MyButton from '../../myButton/MyButton'

const Types = ({ windowDisplay }) => {
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [parametersId, setParametersId] = useState([])
    const [id, setId] = useState('')
    const [parentId, setParentId] = useState('')
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
                    const result = await adminApi.createType(parentId, name, parametersId, categoryId)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You created a type')
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
                    const result = await adminApi.updateType(id, parentId, name, parametersId, categoryId)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You updated a type')
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
                    const result = await adminApi.deleteType(id)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You deleted a type')
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
                        <p className='mini-field-list-text' style={{ fontSize: 30 }}>Parent id:</p>
                        <input
                            className='mini-field-list-redact-input'
                            placeholder="If it's needed"
                            value={parentId}
                            onChange={(event) => setParentId(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Category id:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={categoryId} 
                            onChange={(event) => setCategoryId(event.target.value)}
                        />
                    </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Parameters id:</p> 
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className='mini-field-list-redact-textarea' 
                            placeholder='Enter separated by commas' 
                            value={parametersId.join(',')} 
                            onChange={(event) => setParametersId(event.target.value.split(', '))}
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

export default Types