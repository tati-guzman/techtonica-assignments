/* Spirit Animal Game

Idea: Random generator to answer the question: "Which pet is your spirit animal?"

HTML:
<Usual HTML meta info>

<body>
<header> Which pet is your spirit animal?
<smaller announcement> *No animal was hurt in the making of these pictures, except for their pride perhaps*

[Daisy] Daisy Picture: img tag linking to picture of Daisy, class name pet, id name is Daisy
[Luke] Luke Picture: img tag linking to picture of Daisy, class name pet, id name is Luke
[Han ]Han Picture: img tag linking to picture of Daisy, class name pet, id name is Han

Button: This is the button that when clicked, picks a random pet and shows their image

Stats: Amount of Clicks: X | Daisy: X | Luke: X | Han: X 
Note - each X should be its own element to be updated via JS
Each counter element will have the class "counter"

<embed the script>

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

