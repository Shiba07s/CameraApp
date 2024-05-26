import React, { useRef, useEffect, useState } from 'react';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const checkPermission = async () => {
      const permission = await navigator.permissions.query({ name: 'camera' });
      setHasPermission(permission.state === 'granted');
    };

    checkPermission();

    if (hasPermission) {
      navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
          videoRef.current.srcObject = stream;
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
    }
  }, [hasPermission]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted></video>
    </div>
  );
};

export default WebcamCapture;
