import React, { useState, useContext, useEffect } from 'react'
import * as adminApi from '../../../api/adminApi'
import { AppContext } from '../../AppContext'
import MyButton from '../../myButton/MyButton'

const Parameters = ({ windowDisplay }) => {
    const [name, setName] = useState('')
    const [typesId, setTypesId] = useState([])
    const [allowValues, setAllowValues] = useState([])
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
                    const result = await adminApi.createParameter(name, allowValues, typesId)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You created a parameter')
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
                    const result = await adminApi.updateParameter(id, name, allowValues, typesId )
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You updated a parameter')
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
                    const result = await adminApi.deleteParameter(id)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You deleted a parameter')
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
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Types id:</p> 
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className='mini-field-list-redact-textarea' 
                            placeholder='Enter separated by commas' 
                            value={typesId.join(',')} 
                            onChange={(event) => setTypesId(event.target.value.split(', '))}
                        />
                    </div>
                    <div className='mini-field-list-row'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Allowed values:</p> 
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className='mini-field-list-redact-textarea' 
                            placeholder='Enter separated by commas' 
                            value={allowValues.join(',')} 
                            onChange={(event) => setAllowValues(event.target.value.split(', '))}
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

export default Parameters