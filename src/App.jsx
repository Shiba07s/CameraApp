// src/App.js
import React, { useState } from 'react';
import WebcamCapture from './Components/WebcamCapture';
import CapturedImage from './Components/CapturedImage';
import './App.css';

const App = () => {
  const [capturedImage, setCapturedImage] = useState('');

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
  };

  const handleReset = () => {
    setCapturedImage('');
  };

  return (
    <div className="App">
      <h1>Webcam Selfie App</h1>
      {capturedImage ? (
        <CapturedImage imageSrc={capturedImage} onReset={handleReset} />
      ) : (
        <WebcamCapture onCapture={handleCapture} />
      )}
    </div>
  );
};

export default App;
