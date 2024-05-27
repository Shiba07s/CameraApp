import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  useEffect(() => {
    // Check if the device is a mobile device
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);

    // Request camera access if on a mobile device
    if (isMobileDevice) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (webcamRef.current) {
            webcamRef.current.stream = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <video ref={webcamRef} autoPlay playsInline style={{ width: '100%' }} />
      ) : (
        <Webcam
          audio={false}
          height={480}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
        />
      )}
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} alt="Captured" />}
    </div>
  );
};

export default WebcamComponent;