//Import React hooks needed for app
import { useState } from 'react'
//Import CSS Stylesheet
import './App.css'
//Import all components
import Landing from './components/Landing.jsx'
import Question from './components/Question.jsx'
import FinalMessage from './components/FinalMessage.jsx'


function App() {
 

  const [quiz, setQuiz] = useState(null)

  //Landing Page Visibility is being handled by this state
  const [isLandingVisible, setIsLandingVisible] = useState(true);

  //Quiz Question visibility is being handled by this state
  const [isQuizAvailable, setIsQuizAvailable] = useState(false);

  //Keeping count of correct answers - state is updated via child component (Question)
   const [count, setCount] = useState(0)

   //Keeping track of quiz being done - state is updated via child component (Question)
   const [isQuizComplete, setIsQuizComplete] = useState(false);

   //Keeps track of all player info from table
   const [playerInfo, setPlayerInfo] = useState([]);

   //Track current player
   const [currentPlayer, setCurrentPlayer] = useState("");

   //State to track whether or not there will be a new submission -> logic to show added input field
   const [addingNewUser, setAddingNewUser] = useState(false);
  
  //Triggered by start button within Landing Component - this fetches the quiz data
  const onStart = () => {
    console.log("The quiz should start");
        
        //Fetch quiz questions from server,set quiz state to fetched data, remove "Landing visibility"
        fetch('/quiz')
            .then((res) => res.json())
            .then((data) => setQuiz(data.results))
            .then(setIsLandingVisible(false))
            .then(setIsQuizAvailable(true))
            .catch((err) => {
                alert("Oops, something went wrong. Please try again.");
                console.log({Details: err});
            })
  }

  return (
    <div className="container">
      {isLandingVisible && <Landing onStart={onStart} setPlayerInfo={setPlayerInfo} playerInfo={playerInfo} setCurrentPlayer={setCurrentPlayer} addingNewUser={addingNewUser} setAddingNewUser={setAddingNewUser} />}

      {isQuizAvailable && <Question quiz={quiz} setCount={setCount} setIsQuizComplete={setIsQuizComplete} setIsQuizAvailable={setIsQuizAvailable}/>}

      {isQuizComplete && <FinalMessage count={count} currentPlayer={currentPlayer} addingNewUser={addingNewUser} playerInfo={playerInfo} />}

    </div>
  )
}

export default App
