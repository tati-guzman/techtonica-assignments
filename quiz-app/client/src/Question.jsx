//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'
import he from 'he'

const Question = ({quiz, setCount, setIsQuizComplete, setIsQuizAvailable}) => {
    
    //Actual Question statement: quiz[index].question

    //Answer: quiz[index][correct_answer]

    /*

    -Need to have it loop through the questions
    -At each index, display the question statement^
    -Display true or false buttons (put them down in the return area and make their values be true or false)
    -When the user hits one of the buttons, check to see if it matches the answer
    -If it matches, show success message. If not, show failure message. Either way, show "Next" button
    -> Also if it matches, update counter +1
    -When user clicks next, loop to next index

    */

    const [correct, setCorrect] = useState(false)
    const [answerDisabled, setAnswerDisabled] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [clickNext, setClickNext] = useState(false);


    const handleAnswer = (value) => {
        console.info('value', value)

        setAnswerDisabled(true);

        if (value.target.value === quiz[questionNumber]["correct_answer"]) {
            console.info("got into correct")
            setCorrect(true);
            setCount((prevCount) => prevCount + 1);
        } else {
            setIncorrect(true);
        }

        setClickNext(true);
    }

    const nextQuestion = () => {
        setCorrect(false);
        setIncorrect(false);
        setClickNext(false);
        setAnswerDisabled(false);
        setQuestionNumber((prevQuestion) => prevQuestion + 1);

        if (questionNumber === (quiz.length - 1)) {
            setIsQuizAvailable(false);
            setIsQuizComplete(true);
        }
    }

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

            <button onClick={nextQuestion} disabled={!clickNext}>Next Question</button>

        </>
    )
}

export default Question