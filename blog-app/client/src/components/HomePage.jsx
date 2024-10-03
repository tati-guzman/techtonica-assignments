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
                <img className="home-photo" src={puppyPic2} width="410" height="600"/>
                {/* <img className="home-photo" src={puppyPic} alt="dog" width="360" height="640"/> */}
                <img className="home-photo" src={sunnyDaisy} width="360" height="600"/>
                <img className="home-photo" src={DaisyStairs} width="410" height="600"/>
                
                
            </div>
        </>
    )
}

export default HomePage