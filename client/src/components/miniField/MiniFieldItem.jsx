import React from 'react';
import './miniField.css'

const MiniFieldListItem = ({ element }) => {
  return (
    <div className='mini-field-list-block'>
      {element.name && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Name:</p>
          <p className="mini-field-list-text">{element.name}</p>
        </div>
      )}
      {element.imageLink && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Image:</p>
          <img className="mini-field-list-image" src={element.imageLink} alt={element.name} />
        </div>
      )}
      {element.imageLinks && element.imageLinks.length > 0 && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Images:</p>
          <img className="mini-field-list-image" src={element.Images.join(', ')} alt={element.name}/>
        </div>
      )}
      {element.description && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Description:</p>
          <p className="mini-field-list-text">{element.description}</p>
        </div>
      )}
      {element.price && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Price:</p>
          <p className="mini-field-list-text">{element.price}</p>
        </div>
      )}
      {element.discount && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Discount:</p>
          <p className="mini-field-list-text">{element.discount}</p>
        </div>
      )}
      {element.number && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Quantity:</p>
          <p className="mini-field-list-text">{element.number}</p>
        </div>
      )}
      {element.allowValues && element.allowValues.length > 0 && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Allowed values:</p>
          <p className="mini-field-list-text">{element.allowValues.join(', ')}</p>
        </div>
      )}
      {element.paramValues && element.paramValues.length > 0 && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Parameters values:</p>
          <p className="mini-field-list-text">{element.paramValues.join(', ')}</p>
        </div>
      )}  
      {element.id && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Id:</p>
          <p className="mini-field-list-text">{element.id}</p>
        </div>
      )}
      {element.parrentId && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Parrent id:</p>
          <p className="mini-field-list-text">{element.parrentId}</p>
        </div>
      )}
      {element.parametersId && element.parametersId.length > 0 && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Parameters id:</p>
          <p className="mini-field-list-text">{element.parametersId.join(', ')}</p>
        </div>
      )}
      {element.categoryId && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Category id:</p>
          <p className="mini-field-list-text">{element.categoryId}</p>
        </div>
      )}
      {element.typesId && element.typesId.length > 0 && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Types id:</p>
          <p className="mini-field-list-text">{element.typesId.join(', ')}</p>
        </div>
      )}
      {element.typeId && (
        <div className='mini-field-list-row'>
          <p className='mini-field-list-text'>Type id:</p>
          <p className="mini-field-list-text">{element.typeId}</p>
        </div>
      )}
    </div>
  );
};

export default MiniFieldListItem;