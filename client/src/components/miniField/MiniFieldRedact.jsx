import React, { useState, useEffect } from 'react'

const MiniFieldRedact = ({ windowDisplay, list }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    displayContent();
  }, [windowDisplay, list]);

  const displayContent = () => {
    switch (windowDisplay) {
      case 'Create':
        setContent(
          <div>
            {list === 'categories' &&
                <>
                    <div className='mini-field-list-row'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Name:</p> 
                        <input className='mini-field-list-redact-input' placeholder='Empty'/>
                    </div>
                    <div className='mini-field-list-row'>
                        <p className='mini-field-list-text' style={{fontSize: 30}}>Types id:</p> 
                        <input className='mini-field-list-redact-input' placeholder=''/>
                    </div> 
                </>
            }
            {list === 'products' && <input />}
            {list === 'types' && <input />}
          </div>
        );
        break;
      case 'Update':
        setContent(
          <div>
            {list === 'categories' && <input />}
            {list === 'products' && <input />}
            {list === 'types' && <input />}
          </div>
        );
        break;
      case 'Delete':
        setContent(
          <div>
            {list === 'categories' && <input />}
            {list === 'products' && <input />}
            {list === 'types' && <input />}
          </div>
        );
        break;
    }
  };

  return (
    <div className='mini-field-list-redact'>
      <h1 className='mini-field-list-redact-title'>{windowDisplay} {list}</h1>
      {content}
    </div>
  );
};

export default MiniFieldRedact;