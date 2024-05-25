import React, { useRef, useEffect, useState } from 'react';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [downloadButtonVisible, setDownloadButtonVisible] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoRef.current.srcObject = stream;
        setDownloadButtonVisible(true); // Show the download button once the stream starts
      })
    .catch(err => {
        console.error('An error occurred: ' + err);
      });

    return () => {
      // Cleanup: Stop the video stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureFrameAndDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imgData = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'webcam-capture.png';
    link.click();

    setTimeout(() => {
      link.remove(); // Clean up the temporary link element
    }, 100);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted></video>
      {downloadButtonVisible && (
        <button className="btn btn-primary mt-2" onClick={captureFrameAndDownload}>Download Current Frame</button>
      )}
    </div>
  );
};

export default WebcamCapture;
