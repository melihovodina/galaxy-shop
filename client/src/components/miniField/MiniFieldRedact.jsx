import React, { useState, useEffect } from 'react'
import Categories from './MiniFieldRedactInputs/Categories'
import './miniField.css'
import Products from './MiniFieldRedactInputs/Products';

const MiniFieldRedact = ({ windowDisplay, list }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log(windowDisplay);
    displayContent();
  }, [windowDisplay, list]);

  const displayContent = () => {
        setContent(
          <div>
            {list === 'categories' && <Categories windowDisplay={windowDisplay}/>}
            {list === 'products' && <Products />}
          </div>
        )
    }

  return (
    <div className='mini-field-list-redact'>
      <h1 className='mini-field-list-redact-title'>{windowDisplay} {list}</h1>
      {content}
    </div>
  );
};

export default MiniFieldRedact;