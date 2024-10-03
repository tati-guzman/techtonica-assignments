//Import necessary functionalities
import React, { useEffect } from 'react';
import Sentiment from 'sentiment';

const PostList = ({ setComponent, blogPosts, setBlogPosts, setSelectedPost }) => {
    
    //Load all posts when toggling to this component
    useEffect(() => {
        loadPosts();
    }, []);
    
    //Function to fetch all completed posts
    const loadPosts = async () => {
        try {
            const response = await fetch('/blog');

            if (response && !response.ok) {
                throw new Error("Failed to fetch blog posts");
            }
            
            const blogPostInfo = await response.json();
           
            setBlogPosts(blogPostInfo);
        } catch (error) {
            console.error({ message: "Error loading blog posts", details: error });
        }
    }

    //Function to open up an individual full post
    const openPost = (post) => {
        setSelectedPost(post);
        setComponent('full post');
    }

    //Using this for debugging
    if (blogPosts) {
        console.log(blogPosts);
    } 

    //Use Sentiment package
    const sentimentAnalyzer = new Sentiment();

    //Create utility function to determine color based on sentiment score
    const pickSentimentColor = (score) => {
        if (score < -3) {
            return 'maroon'; // Very negative
        } else if (score >= -3 && score < 0) {
            return 'crimson'; // Negative
        } else if (score === 0) {
            return 'LightYellow'; // Neutral
        } else if (score > 0 && score < 3) {
            return 'aquamarine'; // Slightly positive
        } else { // score > 3
            return '#6fdc6f'; // Positive
        }
    }
    
    return (
        <>
            {blogPosts.map((post, index) => {
                //Function to convert the creation timestamp into just the date written out
                const correctDate = post.created_at ? new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) : '';

                //Analyze sentiment of post
                const sentimentResult = sentimentAnalyzer.analyze(post.content);
                const sentimentScore = sentimentResult.comparative;
                const sentimentColor = pickSentimentColor(sentimentScore);

                return (
                    <div key={index} className="list-post" style={{ border: `3px solid ${sentimentColor}`}}>
                        <h3>{post.title}</h3>
                        <p>{correctDate}</p>
                        <button className="list-button" onClick={() => openPost(post)}>Read Full Post</button>
                        <p>Sentiment Score: {sentimentScore.toFixed(3)}</p>
                    </div>
                )
            })}
        </>
    )
}

export default PostList