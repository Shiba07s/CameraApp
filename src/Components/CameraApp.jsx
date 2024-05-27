// src/CameraApp.js
import React, { useRef, useEffect } from 'react';
import './CameraApp.css';

const CameraApp = () => {
  const cameraViewRef = useRef(null);
  const cameraOutputRef = useRef(null);
  const cameraSensorRef = useRef(null);

  useEffect(() => {
    const constraints = { video: { facingMode: "user" }, audio: false };

    const cameraStart = () => {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          const track = stream.getTracks()[0];
          cameraViewRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error("Oops. Something is broken.", error);
        });
    };

    window.addEventListener("load", cameraStart, false);

    return () => {
      window.removeEventListener("load", cameraStart);
    };
  }, []);

  const handleCapture = () => {
    const cameraSensor = cameraSensorRef.current;
    const cameraView = cameraViewRef.current;
    const cameraOutput = cameraOutputRef.current;

    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
  };

  return (
    <main id="camera">
      <canvas id="camera--sensor" ref={cameraSensorRef}></canvas>
      <video id="camera--view" ref={cameraViewRef} autoPlay playsInline></video>
      <img src="//:0" alt="" id="camera--output" ref={cameraOutputRef} />
      <button id="camera--trigger" onClick={handleCapture}>
        Take a picture
      </button>
    </main>
  );
};

export default CameraApp;
