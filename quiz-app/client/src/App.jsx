//Import React hooks needed for app
import { useState } from 'react'
//Import CSS Stylesheet
import './App.css'
//Import all components
import Landing from './Landing.jsx'
// import Question from './Question.jsx'
// import StartButton from './StartButton.jsx'
// import SubmitAnswer from './SubmitAnswer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  const [quiz, setQuiz] = useState([])

  const [isLandingVisible, setIsLandingVisible] = useState(true);
  

  const onStart = () => {
    console.log("The quiz should start");
        
        //Fetch quiz questions from server and set quiz state to fetched data
        fetch('/quiz')
            .then((res) => res.json())
            .then((data) => setQuiz(data.results))
            .then(setIsLandingVisible(false))
            .catch((err) => {
                alert("Oops, something went wrong. Please try again.");
                console.log({Details: err});
            })
  }

  return (
    <>
      {isLandingVisible && <Landing onStart={onStart}/>}

    </>
  )
}

export default App
