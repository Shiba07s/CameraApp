import { useState } from 'react'
import WebcamCapture from './Components/WebcamCapture'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <header className="App-header">
        <WebcamCapture />
      </header>
    </div>
    </>
  )
}

export default App
