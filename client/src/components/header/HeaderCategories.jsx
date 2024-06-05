import React from 'react'

const HeaderCategories = ( { category, setCategoryId} ) => {
    return (
        <div className='header-category' onClick={() => setCategoryId(category.id)}>
            <img className='header-category-image' src={category.imageLink} alt={category.name}/>
            <h1 className='header-category-name'>{category.name}</h1>
        </div>
    )
}

export default HeaderCategories 