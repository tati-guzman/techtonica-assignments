import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [message, setMessage] = useState(null)

  //Fetch Details
  useEffect(() => {

    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, [])


  return (
    <>
      <h1>{message}</h1>

      <h2>This is working on the front end!</h2>
    </>
  )
}

export default App
