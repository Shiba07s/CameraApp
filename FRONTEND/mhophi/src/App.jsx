import { useState } from 'react'
import Header from './Components/Header';
import MenuTop from './Components/MenuTop';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
 function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <Header />
      <MenuTop />
       
    </Router>
  );
}


export default App