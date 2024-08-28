import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(0)

  //fetch details
  useEffect(() => {
    fetch('/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, [])


  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
