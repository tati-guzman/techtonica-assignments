import { useState } from 'react'
import './App.css'
import Word from './Word.jsx'

function App() {
  // const [count, setCount] = useState(0)
  //Example of changing count using button
 {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

  //Maintain a state of selected buttons (using the text attribute)
  const [selected, setSelected] = useState([])
  console.log(selected)
  //Function: getColor -> if selected, do this color. If matched, this color. If not selected, this color. Then pass getColor as a "color = {getColor}" on each Word below.

  //Function: Create array with answer key [[group1], [group2]..] Function needs to check if the words that are submitted (THIS IS THE ONSUBMIT function) match the words in the arrays. If it matches one of the arrays, have it change the state of isMatched. If it doesn't, update the Lives counter. Show try again message

  //To Add Below: Submit Button (new component?), Message Board to be updated (new component)

  return (
    <>
      <h1>🧠 Connections 🧠</h1>
      <h3>Can you group these words into four categories before running out of tries?</h3>
      <Word setSelected={setSelected} text="Word 1"/>
      <Word setSelected={setSelected} text="Word 2"/>
      <Word setSelected={setSelected} text="Word 3"/>
      <Word setSelected={setSelected} text="Word 4"/>
      <Word setSelected={setSelected} text="Word 5"/>
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