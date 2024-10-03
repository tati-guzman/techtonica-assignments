//Import necessary functionalities
import React, { useEffect } from 'react';

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
    
    return (
        <>
            {blogPosts.map((post, index) => {
                //Function to convert the creation timestamp into just the date written out
                const correctDate = post.created_at ? new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }) : '';

                return (
                    <div key={index} className="list-post">
                        <h3>{post.title}</h3>
                        <p>{correctDate}</p>
                        <button className="list-button" onClick={() => openPost(post)}>Read Full Post</button>
                    </div>
                )
            })}
        </>
    )
}

export default PostList