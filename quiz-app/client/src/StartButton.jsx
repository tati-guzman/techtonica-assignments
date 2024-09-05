//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'

const StartButton = () => {
    const [quiz, setQuiz] = useState([])


    const onClick = () => {
        console.log("The quiz should start");
        
        //Fetch quiz questions from server
        fetch('/quiz')
            .then((res) => res.json())
            // .then((quizData) => console.log(quizData.results))
            .then((data) => setQuiz(data.results))
            // .then((questions) => console.log(questions.results))
            .catch((err) => {
                alert("Oops, something went wrong. Please try again.");
                console.log({Details: err});
            })

        console.log("Finished fetching");

        console.log(quiz);
    }
    
    return (
        <>
            <button type="submit" onClick={onClick}>Ready to Rumble!</button>
        </>
    )
}

export default StartButton