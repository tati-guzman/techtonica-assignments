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
  
  //Function: Create array with answer key [[group1], [group2]..] Function needs to check if the words that are submitted (THIS IS THE ONSUBMIT function) match the words in the arrays. If it matches one of the arrays, have it change the state of isMatched. If it doesn't, update the Lives counter. Show try again message
  const answerKey = [["1", "4", "11", "16"], ["5", "8", "10", "13"], ["3", "6", "9", "14"], ["2", "7", "12", "15"]]

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
      <Submit />
      <Message selected={selected}/>
      {/* Update message after onSubmit with new state for potential errors */}
    </>
  )
}

export default App