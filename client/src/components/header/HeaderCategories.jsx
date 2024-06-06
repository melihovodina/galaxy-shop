import React from 'react'

const HeaderCategories = ( { category, setCategoryId, setMenuOpen} ) => {
    const handleClick = () => {
        setCategoryId(category.id) 
        setMenuOpen('closed')
    }

    return (
        <div className='header-category' onClick={() => handleClick()}>
            <img className='header-category-image' src={category.imageLink} alt={category.name}/>
            <h1 className='header-category-name'>{category.name}</h1>
        </div>
    )
}

export default HeaderCategories 