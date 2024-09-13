import React from 'react'
import './App.jsx'

//Create an array with the answer key. Each matched group is an array within this array. It uses their ids.
//In future iterations: this should be changed to use the words themselves.
const answerKey = [["1", "4", "11", "16"], ["5", "8", "10", "13"], ["3", "6", "9", "14"], ["2", "7", "12", "15"]]

//Create an array with the button colors when successfully matched
const colors = ["lightcyan", "lightgoldenrodyellow", "peachpuff", "powderblue"]

//Pass in various props for the submit button to update states as necessary
const Submit = ({setCount, setSelected, setMatched, selected}) => {
    
    //Creates a variable to add styling within the component rather than in a stylesheet (using this for practice)
    const style = {
        backgroundColor: "#f7fc81",
        fontSize: "25px",
        borderRadius: "50%",
        width: "200px"
    }

    //Function to check submission against answer key
    const checkAnswer = () => {
        //Take the array of selected elements that are being submitted and sort in numerical order (since the ids are numbers)
        let guess = selected.sort((a, b) => (a - b));
        
        //Loop through the answer key to check each possible grouping
        for (let j = 0; j < answerKey.length; j++) {
            //Answer points to an array at the designated index
            const answer = answerKey[j];
            //Set up a matches variable to start off as true each time a new answer array is checked (to be changed if nothing is a match)
            let matches = true;
            //In each answer array, check that the value at each index matches the value of the user's guess 
            for (let i = 0; i < answer.length; i++) {
                //If something doesn't match, set matches to false and loop through the next potential answer block
                if (answer[i] !== guess[i]) {
                    matches = false;
                }
            } 
            //If after it loops through an answer array in the answer key, matches remains true, it means everything matched!
            if (matches) {
                //Exit the function with an object that tells us if the answer matched and at what index it matched (points to the appropriate array)
                return {answerMatches: true, colorIndex: j};
            }
        }

        //If the function didn't return anything from the loop, it means there were no matches. Return the object indicating there were no matches.
        return {answerMatches: false};
    }

    //Create a function to check matches when users submit guesses
    const handleSubmit = () => {
        
        // If there aren't enough words selected, do not submit
        if (selected.length < 4) {
            //We are not returning anything. Simply exiting the function.
            return
        }
        
        //Update the count state to track another submission
        setCount((count) => count + 1)
        
        //Check to see if the words submitted by the user match any groups in the answer key by running checkAnswer
        const {answerMatches, colorIndex} = checkAnswer()
        
        //If checkAnswer returns true for answerMatches, it means the submission was correct
        if (answerMatches) {
            //Update the state that is tracking matches
            setMatched ((currentMatched) => {
                const newMatched = {...currentMatched};
                //For each answer in the selected submission, add a key value pair that uses the id as a key and the assigned color as value
                selected.forEach((item) => {
                    newMatched[item] = colors[colorIndex];
                })
                //Return the updated object that has all the currently matched ids with the color they should be
                return newMatched;
            })
        }
        
        //Reset the selected state back to blank regardless of the person being correct or not
        setSelected([]);
    }

    return (
        <button className="submit-btn" style={style} onClick={handleSubmit} disabled={selected.length < 4}>Submit Guess</button>
    )
}

export default Submit