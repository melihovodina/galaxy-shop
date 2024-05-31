import React, { useState } from 'react'
import * as adminApi from '../../../api/adminApi'
import MyButton from '../../myButton/MyButton'

const Categories = ({ windowDisplay }) => {
    const [name, setName] = useState('')
    const [typesId, setTypesId] = useState([])
    const [image, setImage] = useState('')
    const [id, setId] = useState('')

    const save = async () => {
        switch (windowDisplay) {
            case 'Create':
                try {
                    const result = await adminApi.createCategory(name, image, typesId)
                    if (response.status === 200) {
                        
                    }
                } catch (error) {

                }
                break;
            case 'Update':
                adminApi.updateCategory(id, name, image, typesId)
                break;
            case 'Delete':
                adminApi.deleteCategory(id)
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
                                onChange={(event) => setTypesId(event.target.value.split(','))}
                            />
                        </div>
                        <div className='mini-field-list-row'>
                            <p className='mini-field-list-text' style={{fontSize: 30}}>Image:</p> 
                            <input 
                                type='file' 
                                style={{marginTop: 12}} 
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    setImage(file);
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

export default Categories