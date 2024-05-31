import React from 'react'

const Products = ({id}) => {
    const [name, setName] = useState('')
    const [typesId, setTypesId] = useState([])
    const [image, setImage] = useState('')

    return (
        <>
            <div className='mini-field-list-row'>
                <p className='mini-field-list-text' style={{fontSize: 30}}>Name:</p> 
                <input 
                    className='mini-field-list-redact-input' 
                    placeholder='Empty'   
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className='mini-field-list-row'>
                <p className='mini-field-list-text' style={{fontSize: 30}}>Types id:</p> 
                <input 
                    className='mini-field-list-redact-input' 
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
            <MyButton 
                className='mini-field-button right'
                scaleFrom={1} 
                scaleTo={1.2}
                onClick={()=> adminApi.createCategory(name, image, typesId)}
            >
                <>Save</>
            </MyButton> 
        </>
    )
}

export default Products