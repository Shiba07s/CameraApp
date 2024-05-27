import { useState } from 'react'
import WebcamCapture from './Components/WebcamCapture'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileCameraCapture from './Components/MobileCameraCapture';
import CameraApp from './Components/CameraApp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <WebcamCapture /> */}
{/* <MobileCameraCapture /> */}
<CameraApp />
      </header>
    </div>
    </>
  )
}

export default App
