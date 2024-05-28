import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MyButton from '../myButton/MyButton';
import './window.css'

const Window = ({ isVisible, setIsVisible, elements }) => {
  if (!isVisible) return null;

  const handleHideWindow = () => {
    setIsVisible(false);
  };

  return (
    <div className='window'>
        <MyButton 
            className='window-exit-button'
            childrenClassName='window-cross'
            scaleFrom={1} 
            scaleTo={1.2}
            colorFrom="white" 
            colorTo="rgb(233, 0, 0)"
            onClick={handleHideWindow}
        >
            <CloseRoundedIcon/>
        </MyButton>
        {elements.map((element, index) => {
            switch (element.type) {
                case 'h1':
                    return <h1 className="window-title" key={index}>{element.text}</h1>;
                case 'input':
                    return <input className="window-input" key={index} placeholder={element.placeholder} />;
                case 'p':
                    return <p className="window-p" key={index}>{element.text}</p>;
                case 'button':
                    return <MyButton 
                        className='window-button'
                        childrenClassName='window-button-children'
                        scaleFrom={element.scaleFrom} 
                        scaleTo={element.scaleTo}
                        colorFrom={element.colorFrom}
                        childrenScaleFrom = {element.childrenScaleFrom}
                        childrenScaleTo = {element.childrenScaleTo}
                        childrenScaleFromForBig = {element.childrenScaleFromForBig}
                        childrenScaleToForBig = {element.childrenScaleToForBig}
                        childrenScaleFromForSmall= {element.childrenScaleFromForSmall}
                        childrenScaleToForSmall = {element.childrenScaleToForSmall} 
                        colorTo={element.colorTo}
                        onClick={element.onClick}
                    >
                        <>{element.text}</>
                    </MyButton>;
                default:
                    return null;
            }
        })}
    </div>
  );
};

export default Window;