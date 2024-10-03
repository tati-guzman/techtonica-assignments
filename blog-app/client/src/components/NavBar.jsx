//Import necessary functionalities
import React from 'react';

const NavBar = ({ setComponent }) => {

    //Create onChange function to filter posts by title and show that individual post when clicked

    return (
        <nav>
            
            <h1>The Daisy Diaries</h1>
            
            {/* Future Task: Create onChange function to filter posts by title and show that individual post */}
            <input 
                name="search"
                type="text"
                placeholder="Search for Posts by Title"
            />

            <button onClick={() => setComponent('list')}>View All Posts</button>
            <button onClick={() => setComponent('form')}>Create a Post</button>

        </nav>
    )
}

export default NavBar;