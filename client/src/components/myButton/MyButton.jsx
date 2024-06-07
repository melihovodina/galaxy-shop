import React, { useState, useEffect } from 'react';
import './myButton.css';

const MyButton = ({
  children,
  scaleFrom,
  scaleTo,
  childrenScaleFrom = scaleFrom,
  childrenScaleTo = scaleTo,
  childrenScaleFromForBig = childrenScaleFrom,
  childrenScaleToForBig = childrenScaleTo,
  childrenScaleFromForSmall= childrenScaleFrom,
  childrenScaleToForSmall = childrenScaleTo,
  colorFrom,
  colorTo,
  className,
  childrenClassName,
  onClick,
  keyTrigger // add this prop to specify the key to trigger onClick
}) => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered('hovered');
  };

  const handleMouseLeave = () => {
    setIsHovered('notHovered');
  };

  const handleKeyPress = (event) => {
    if (event.key === keyTrigger) {
      onClick(); // trigger the onClick event
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyTrigger, onClick]);

  return (
    <button
      className={`button ${isHovered === 'hovered'? 'hovered' : isHovered === 'notHovered'? 'notHovered' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--scale-from': scaleFrom,
        '--scale-to': scaleTo,
        '--children-scale-from': childrenScaleFrom,
        '--children-scale-to': childrenScaleTo,
        '--children-scale-from-for-big': childrenScaleFromForBig,
        '--children-scale-to-for-big': childrenScaleToForBig,
        '--children-scale-from-for-small': childrenScaleFromForSmall,
        '--children-scale-to-for-small': childrenScaleToForSmall,
        '--color-from': colorFrom,
        '--color-to': colorTo,
      }}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { 
          className: `icon ${isHovered === 'hovered'? 'hovered-icon' : isHovered === 'notHovered'? 'notHovered-icon' : ''} ${childrenClassName}` 
        })
      )}
    </button>
  );
};

export default MyButton;