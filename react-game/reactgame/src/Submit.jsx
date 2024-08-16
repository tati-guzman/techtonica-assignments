import React from 'react'
import './App.jsx'

//Create an array with the answer key. Each matched group is an array within this array.
const answerKey = [["1", "4", "11", "16"], ["5", "8", "10", "13"], ["3", "6", "9", "14"], ["2", "7", "12", "15"]]
const colors = ["red", "purple", "green", "blue"]


const Submit = ({setSelected, setMatched, selected}) => {
    //Creates a variable to add styling within the component rather than in a stylesheet
    const style = {
        backgroundColor: "#f7fc81",
        fontSize: "25px",
        borderRadius: "50%",
        width: "200px"
    }

    //Function to check answer key
    const checkAnswer = () => {
        let guess = selected.sort((a, b) => (a - b));
        for (let j = 0; j < answerKey.length; j++) {
            const answer = answerKey[j];
            let matches = true;
            for (let i = 0; i < answer.length; i++) {
                if (answer[i] !== guess[i]) {
                    matches = false;
                }
            } 
            if (matches) {
                return {answerMatches: true, colorIndex: j};
            }
        }
        return {answerMatches: false};
    }

    //Create a function to check matches when users submit guesses
    const handleSubmit = (event) => {
        // If there aren't enough words selected, do not submit
        if (selected.length < 4) {
            return
        }
        //Check to see if the words submitted by the user match any groups in the answer key
        const {answerMatches, colorIndex} = checkAnswer()
        if (answerMatches) {
            console.log("This worked!")
            //If it matches, update the state tracking matches
            setMatched ((currentMatched) => {
                //NEED TO DO: set button to know it's matched (so we can update color)
                //NEED TO DO: make it so it's not clickable? Or does that happen once we tell it it's matched and change the color?
                const newMatched = {...currentMatched};
                selected.forEach((item) => {
                    newMatched[item] = colors[colorIndex];
                })
                return newMatched;
            })
        }
        setSelected([]);
    }

    return (
        <button style={style} onClick={handleSubmit} disabled={selected.length < 4}>Submit Guess</button>
    )
}

export default Submit