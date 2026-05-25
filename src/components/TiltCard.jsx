import React, { useState, useRef } from 'react';

export const TiltCard = ({ children, style, onClick, className, ...props }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [boxShadow, setBoxShadow] = useState('0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)');

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const maxRotation = 15; 
    const scaleFactor = 1.05; 

    const rotateX = -y * maxRotation;
    const rotateY = x * maxRotation;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleFactor}, ${scaleFactor}, ${scaleFactor})`
    );
    
    const shadowX = -x * 15;
    const shadowY = -y * 15;
    setBoxShadow(`${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.15)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setBoxShadow('0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)');
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: transformStyle,
        boxShadow: boxShadow,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
        willChange: 'transform, box-shadow',
      }}
      {...props}
    >
      {children}
    </div>
  );
};