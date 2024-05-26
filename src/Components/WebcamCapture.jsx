import React, { useRef, useEffect, useState } from 'react';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [downloadButtonVisible, setDownloadButtonVisible] = useState(false);
  const [deviceIds, setDeviceIds] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      const deviceIds = videoDevices.map(device => device.deviceId);
      setDeviceIds(deviceIds);
      if (deviceIds.length > 0) {
        setSelectedDeviceId(deviceIds[0]); // Set the first available device as the default
      }
    });
  }, []);

  useEffect(() => {
    if (selectedDeviceId) {
      const constraints = {
        video: {
          deviceId: { exact: selectedDeviceId },
        },
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          videoRef.current.srcObject = stream;
          setDownloadButtonVisible(true);
        })
        .catch(err => {
          console.error('An error occurred: ' + err);
        });
    }

    return () => {
      // Cleanup: Stop the video stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [selectedDeviceId]);

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
      <select value={selectedDeviceId} onChange={e => setSelectedDeviceId(e.target.value)}>
        {deviceIds.map(deviceId => (
          <option key={deviceId} value={deviceId}>
            {deviceId}
          </option>
        ))}
      </select>
      {downloadButtonVisible && (
        <button className="btn btn-primary mt-2" onClick={captureFrameAndDownload}>
          Download Current Frame
        </button>
      )}
    </div>
  );
};

export default WebcamCapture;