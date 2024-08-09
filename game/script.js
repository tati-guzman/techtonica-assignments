/* 
//Spirit Animal Game - Random generator to answer the question: "Which pet is your spirit animal?"

Refresh the page:
Header (always there)
Blank space (all set to hidden via JS)
Button at the bottom
Stats below button

JS:

Make an array that consists of all the pet images (getElementsByClassName - pet) [Daisy, Luke, Han]
Define each component using the array (Daisy = array[0])
Set all three visibilities to hidden

OnClick (of button) **set an event listener to capture the click**

Changing the picture shown:
Generate a random number from 0-2 -> use math random and make it round down 
Change a variable "winner" to select 0-2 in the array -> this points to the winner of the button
Loop through the array of all the pets:
Switch the visibility of the winner element to visible
Switch the other two visibilities to hidden

Keeping Track of Stats:

Make an array with all elements with class name counter (Amount of Clicks, Daisy, Luke, Han)

Total Count (outside onClick):

Make a counter variable (totalCount)

Within the onclick:

Function to increase the counter (totalCount++)
Change the innerHTML of total count to counter

Winner Count (outside onClick): 

Make Daisy count variable (set to 0)
Make Luke count variable
Make Han count variable

Within the onclick:

Write a switch statement with the winner:
If it's 0, update Daisy's counter
If it's 1, update Luke's counter
If it's 2, update Han's counter

Set each innerHTML to its respective counter.


*/

