//Import necessary functionality
import React, { useState } from 'react';

const Form = () => {

    //Individual states for each form input
    const [title, setTitle] = useState("");
    // const [image, setImage] = useState(null);
    const [content, setContent] = useState("");

    //State to manage submission status
    const [submitStatus, setSubmitStatus] = useState(null)

    //Track changes for title input
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    //Track changes for content input
    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    //Submit the data to the database (draft and complete post)
    const handleSubmit = async (event, complete) => {
        //Prevent page from re-loading
        event.preventDefault();
        
        try {
            //POST Request to save blog post submission
            const response = await fetch('/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    // image: image,
                    content: content,
                    complete: complete
                })
            })


            //Error handling for request
            if(!response.ok) {
                setSubmitStatus(false);
                throw new Error("Failed to save submission");
            } else {
                clearForm();
                // setComplete(null);
                setSubmitStatus(true);
            }

        } catch (error) {
            console.error({ message: "Error sending post data", details: error });
        } // } finally {
        //     return <UserMessage submitStatus={submitStatus} />;
        // }
    }

    //Clears form for Cancel button
    const clearForm = () => {
        setTitle("");
        // setImage(null);
        setContent("");
    }

    return (
        <>
            <h1>Create a Post</h1>

            <form onSubmit={(e) => {handleSubmit(e, true)}}>
                <label htmlFor="title">Post Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    required
                /><br></br>

                {/* <label htmlFor="image">Please attach an image, if applicable.</label> */}

                <label htmlFor="content">Post Content:</label><br></br>
                <textarea 
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                    required
                /><br></br>

                <button type="submit">Submit</button>
                <button type="button" onClick={(e) => {handleSubmit(e, false)}}>Save Draft</button>

            </form>

            <button onClick={clearForm}>Cancel</button>
        </>
    )
}

export default Form
