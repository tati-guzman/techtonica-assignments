//Import necessary functionality
import React, { useState } from 'react';
import UserMessage from './UserMessage.jsx';

const Form = () => {

    //Individual states for each form input
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");

    //State to manage submission status
    const [submitStatus, setSubmitStatus] = useState(null);

    //State to manage modal visibility
    const [modalOpen, setModalOpen] = useState(false);

    //State to track the message that will be shown to the user after submission
    const [message, setMessage] = useState("");

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
        
        //Use FormData to include both content with special characters and image uploads
        const formData = new FormData();
        formData.append('title', title);
        if (image) {
            formData.append('image', image)
        }
        formData.append('content', content);
        formData.append('complete', complete);

        try {
            //POST Request to save blog post submission - no headers needed with image upload
            const response = await fetch('/blog', {
                method: 'POST',
                body: formData
            });


            //Error handling for request
            if(!response.ok) {
                setSubmitStatus(false);
                setMessage("We've failed to save the submission. Please check that title and content are filled out. If you've submitted an image, please ensure that it is in JPEG format.");
                throw new Error("Failed to save submission");
            } else {
                {complete ? setMessage('Check out the "All Posts" page to find your submission!') : null}
                clearForm();
                setSubmitStatus(true);
            }

        } catch (error) {
            setSubmitStatus(false);
            setMessage("We've failed to save the submission. Please check that title and content are filled out. If you've submitted an image, please ensure that it is in JPEG format.");
            console.error({ message: "Error sending post data", details: error });
        } finally {
            setModalOpen(true);
         }
    }

    //Clears form for Cancel button
    const clearForm = () => {
        setTitle("");
        setImage(null);
        setContent("");
    }

    return (
        <>
            <h1 className="form-header">Create a Post</h1>

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

                <label htmlFor="image">Please attach an image, if applicable.</label>
                <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/jpeg"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <label htmlFor="content">Post Content:</label><br></br>
                <textarea 
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                    required
                /><br></br>

                <button type="submit">Submit</button>
                <button type="submit" onClick={(e) => {handleSubmit(e, false)}}>Save Draft</button>
                <button onClick={clearForm}>Cancel</button>

            </form>


            {modalOpen && <UserMessage submitStatus={submitStatus} isOpen={modalOpen} onClose={() => setModalOpen(false)} message={message} />}
        </>
    )
}

export default Form
