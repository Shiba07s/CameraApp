// src/CapturedImage.js
import React from 'react';

const CapturedImage = ({ imageSrc, onReset }) => {
  return (
    <div>
      <img src={imageSrc} alt="Captured" />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default CapturedImage;
