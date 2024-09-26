//Import React functionality from react package
import React, { useState } from 'react'
//Import HTML decoder to show apostrophes correctly
import he from 'he'

const Question = ({quiz, setCount, setIsQuizComplete, setIsQuizAvailable}) => {
    
    //States to manage whether a user's answer was correct or incorrect - this will determine message
    const [correct, setCorrect] = useState(false)
    const [incorrect, setIncorrect] = useState(false);

    //The answers will be disabled after an answer is submitted. If an answer is submitted, this state will also allow the "Next Question" button to stop being disabled.
    const [answerDisabled, setAnswerDisabled] = useState(false);

    //This state will track which question number the user is answering
    const [questionNumber, setQuestionNumber] = useState(0);


    const handleAnswer = (value) => {
        //Disable answer buttons. Enable "Next Question" button.
        setAnswerDisabled(true);

        //If the submitted answer is right, show success message and increase counter
        if (value.target.value === quiz[questionNumber]["correct_answer"]) {
            setCorrect(true);
            setCount((prevCount) => prevCount + 1);
        } else {
            //If the answer is wrong, show failure message
            setIncorrect(true);
        }
    }

    const nextQuestion = () => {
        //Reset all the states and display the next question
        setCorrect(false);
        setIncorrect(false);
        setAnswerDisabled(false);
        setQuestionNumber((prevQuestion) => prevQuestion + 1);

        //Check if the "next question" is actually the end of the quiz. If so, update states in App.
        if (questionNumber === (quiz.length - 1)) {
            setIsQuizAvailable(false);
            setIsQuizComplete(true);
        }
    }

    //For debugging purposes, take a look at the current question and quiz data
    console.info("quiz", quiz)
    console.info("question number", questionNumber)

    return (
        <>
            <form>
                <label>
                    {quiz && (questionNumber <= quiz.length - 1) ?
                        <h3>{he.decode(quiz[questionNumber].question)}</h3>
                        : <h3>Quiz Loading</h3>}
                </label>

                <button id="true" value="True" onClick={handleAnswer} disabled={answerDisabled}>True</button>
                <button id="false" value="False" onClick={handleAnswer} disabled={answerDisabled}>False</button>
            </form>

            <p className="response" style={{ visibility: correct ? 'visible' : 'hidden'}}>Congrats you're right!</p>
            <p className="response" style={{ visibility: incorrect ? 'visible' : 'hidden'}}>Oops, that's incorrect!</p>

            <button onClick={nextQuestion} disabled={!answerDisabled}>Next Question</button>

        </>
    )
}

export default Question