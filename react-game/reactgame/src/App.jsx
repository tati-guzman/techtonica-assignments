// import { useState } from 'react'
import './App.css'
import Word from './Word.jsx'

function App() {
  // const [count, setCount] = useState(0)
  //Example of changing count using button
 {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

  return (
    <>
      <h1>🧠 Connections 🧠</h1>
      <h3>Can you group these words into four categories before running out of tries?</h3>
      <Word text="Word 1"/>
      <Word text="Word 2"/>
      <Word text="Word 3"/>
      <Word text="Word 4"/>
      <Word text="Word 5"/>
      <Word text="Word 6"/>
      <Word text="Word 7"/>
      <Word text="Word 8"/>
      <Word text="Word 9"/>
      <Word text="Word 10"/>
      <Word text="Word 11"/>
      <Word text="Word 12"/>
      <Word text="Word 13"/>
      <Word text="Word 14"/>
      <Word text="Word 15"/>
      <Word text="Word 16"/>
    </>
  )
}

export default App