import { useState } from 'react'
import './App.css'
import Word from './Word.jsx'
import Message from './Message.jsx'
import Submit from './Submit.jsx'

function App() {
  // const [count, setCount] = useState(0) - DELETE THIS LATER
  //Example of changing count using button - DELETE THIS LATER
 {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

  //Maintain a state of selected buttons (using the text attribute, this is updated in the Word component)
  const [selected, setSelected] = useState([])
  console.log(selected)
  
  //Maintain a state of buttons who have been successfully matched with their group
  const [matched, setMatched] = useState([])

  //Function: getColor -> if selected, do this color. If matched, this color. If not selected, this color. Then pass getColor as a "color = {getColor}" on each Word below.


  return (
    <>
      <h1>🧠 Connections 🧠</h1>
      <h3>Can you group these words into four categories before running out of tries?</h3>
      <Word setSelected={setSelected} text="Word 1" id="1"/>
      <Word setSelected={setSelected} text="Word 2" id="2"/>
      <Word setSelected={setSelected} text="Word 3" id="3"/>
      <Word setSelected={setSelected} text="Word 4" id="4"/>
      <Word setSelected={setSelected} text="Word 5" id="5"/>
      <Word setSelected={setSelected} text="Word 6" id="6"/>
      <Word setSelected={setSelected} text="Word 7" id="7"/>
      <Word setSelected={setSelected} text="Word 8" id="8"/>
      <Word setSelected={setSelected} text="Word 9" id="9"/>
      <Word setSelected={setSelected} text="Word 10" id="10"/>
      <Word setSelected={setSelected} text="Word 11" id="11"/>
      <Word setSelected={setSelected} text="Word 12" id="12"/>
      <Word setSelected={setSelected} text="Word 13" id="13"/>
      <Word setSelected={setSelected} text="Word 14" id="14"/>
      <Word setSelected={setSelected} text="Word 15" id="15"/>
      <Word setSelected={setSelected} text="Word 16" id="16"/>
      <Submit matchStatus={matched} setMatched={setMatched} selected={selected}/>
      <Message selected={selected}/>
      {/* Update message after onSubmit with new state for potential errors */}
    </>
  )
}

export default App