import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Welcome ");

    // Return a cleanup function if necessary
    return () => {
        // Cleanup code here
    };
}, []);

  

  return (
    <>

    </>
  )
}

export default App