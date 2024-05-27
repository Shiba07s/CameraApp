import React, { useState, useRef, useEffect } from 'react';

const MobileCameraCapture = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [cameraType, setCameraType] = useState('environment');
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const { state } = await navigator.permissions.query({ name: 'camera' });
        setCameraPermission(state);

        if (state === 'granted') {
          startCamera();
        }
      } catch (error) {
        console.error('Error getting camera permission:', error);
      }
    };

    getCameraPermission();
  }, []);

  const startCamera = async () => {
    const constraints = { video: { facingMode: cameraType } };

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const toggleCameraType = () => {
    setCameraType(cameraType === 'environment' ? 'user' : 'environment');
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const capturedImage = canvas.toDataURL('image/png');
    // Do something with the capturedImage, e.g., display it or upload it
    console.log(capturedImage);
  };

  const handleCameraPermission = async () => {
    try {
      const { state } = await navigator.permissions.query({ name: 'camera' });
      setCameraPermission(state);

      if (state === 'prompt') {
        const result = await navigator.permissions.request({ name: 'camera' });
        setCameraPermission(result.state);

        if (result.state === 'granted') {
          startCamera();
        }
      }
    } catch (error) {
      console.error('Error handling camera permission:', error);
    }
  };

  return (
    <div>
      {cameraPermission === 'granted' && (
        <>
          <button onClick={toggleCameraType}>
            Toggle Camera ({cameraType === 'environment' ? 'Front' : 'Back'})
          </button>
          <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
          <button onClick={capturePhoto}>Capture Photo</button>
        </>
      )}
      {cameraPermission === 'prompt' && (
        <button onClick={handleCameraPermission}>Allow Camera Access</button>
      )}
      {cameraPermission === 'denied' && <p>Camera access denied</p>}
    </div>
  );
};

export default MobileCameraCapture;