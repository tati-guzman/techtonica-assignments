//Import necessary functionalities
import React from 'react';

//Import pictures from assets folder
import puppyPic2 from '../assets/Puppy2.jpg';
import sunnyDaisy from '../assets/sunnyDaisy.jpg';
import DaisyStairs from '../assets/DaisyStairs2.jpg';

const HomePage = () => {

    return (
        <>
            <div className="quote">
                <h1>"A dog will teach you unconditional love. If you can have that in your life, things won't be too bad." - Robert Wagner</h1>
            </div>

            <div className="photos">
                <img className="home-photo" src={puppyPic2} width="410" height="600" alt="A small tan dog is sitting on a gray blanket with white dots. She is looking into the camera with her mouth closed. She is a pitbull puppy."/>
                <img className="home-photo" src={sunnyDaisy} width="360" height="600" alt="An adult dog is prancing towards the camera with her mouth open and tongue flopping out. She is tan and wearing a pink harness. She is walking on grass and behind her, you can see sunny blue skies."/>
                <img className="home-photo" src={DaisyStairs} width="410" height="600" alt="A tan adult dog is laying on the landing of beige carpeted stairs. Her paws are crossed over each other. She has her head up and is facing the camera but her eyes are looking to the side. Her mouth is closed."/>
                
                
            </div>
        </>
    )
}

export default HomePage