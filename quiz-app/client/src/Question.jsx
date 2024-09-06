//Import React functionality from react package
import React from 'react'
//Import info from App
import './App.jsx'

const Question = ({quiz, setCount, setIsQuizComplete}) => {
    
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

    return (
        <>
            
        </>
    )
}

export default Question