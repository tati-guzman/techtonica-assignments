//Import necessary functionalities
import React from 'react';

const IndividualPost = ({ selectedPost }) => {
    
    //Imported correctDate function to display date as month date year - opportunity to avoid redundancy here in future clean-ups
    const correctDate = selectedPost.created_at ? new Date(selectedPost.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : '';

    return (
        <>
            <h1>{selectedPost.title}</h1>
            <h4>{correctDate}</h4>
            {selectedPost.image ? <img className="post-pic" src={selectedPost.image}/> : null}
            <p>{selectedPost.content}</p>
        </>
    )
}

export default IndividualPost