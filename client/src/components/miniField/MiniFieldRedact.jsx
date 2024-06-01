import React, { useState, useEffect } from 'react'
import Categories from './MiniFieldRedactInputs/Categories'
import Products from './MiniFieldRedactInputs/Products';
import Parameters from './MiniFieldRedactInputs/Parameters';
import Types from './MiniFieldRedactInputs/Types'
import './miniField.css'

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
            {list === 'products' && <Products windowDisplay={windowDisplay}/>}
            {list === 'parameters' && <Parameters windowDisplay={windowDisplay}/>}
            {list === 'types' && <Types windowDisplay={windowDisplay}/>}
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