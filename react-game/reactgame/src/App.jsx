import { useState } from 'react'
import './App.css'
import Word from './Word.jsx'
import Message from './Message.jsx'
import Submit from './Submit.jsx'

function App() {

  //Maintain a state to count the number of attempts (each successful submit should increase the count by 1, updated by handleSubmit)
  const [count, setCount] = useState(0)
 
  //Maintain a state of selected buttons (using the id attribute, this is updated in the Word component)
  const [selected, setSelected] = useState([])
  console.log(selected)
  
  //Maintain a state of buttons who have been successfully matched with their group
  const [matched, setMatched] = useState({})

  return (
    <>
      <h1>🧠 Connections 🧠</h1>
      <h3>How many tries will it take <i>you</i> to group these words into <b>four</b> categories?</h3>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="turtle" id="1"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="sunshine" id="2"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="state" id="3"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="bird" id="4"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="parrot" id="5"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="component" id="6"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="rest" id="7"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="copy" id="8"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="render" id="9"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="repeat" id="10"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="dog" id="11"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="water" id="12"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="match" id="13"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="root" id="14"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="nutrients" id="15"/>
      <Word matched={matched} selected={selected} setSelected={setSelected} text="cat" id="16"/>
      <Submit setCount={setCount} setMatched={setMatched} selected={selected} setSelected={setSelected}/>
      <Message selected={selected}/>
      <h4>Tries: {count}</h4>
    </>
  )
}

export default App