import React, { useState, useContext, useEffect } from 'react'
import * as adminApi from '../../../api/adminApi'
import { AppContext } from '../../AppContext'
import MyButton from '../../myButton/MyButton'

const Orders = ({ windowDisplay }) => {
    const [id, setId] = useState('')
    const [status, setStatus] = useState(null)
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
            case 'Update':
                try {
                    const result = await adminApi.updateOrder(id, status)
                    if (result.status === 200) {
                        setWindowTitle('Success')
                        setWindowMessage('You updated a order')
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
                <div className='mini-field-list-row loading'>
                    <p className='mini-field-list-redact-text' >Id:</p>
                    <input
                        className='mini-field-list-redact-input'
                        placeholder='Empty'
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                </div>
                    <div className='mini-field-list-row loading'>
                        <p className='mini-field-list-redact-text'>Status:</p> 
                        <input 
                            className='mini-field-list-redact-input' 
                            placeholder='Empty'   
                            value={status} 
                            onChange={(event) => setStatus(event.target.value)}
                        />
                    </div>
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

export default Orders