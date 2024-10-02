//Import styling sheets and functionalities
import './App.css';
import React, { useState } from 'react';

//Import all components for use in display
import NavBar from './components/NavBar.jsx';
// import HomePage from './components/HomePage.jsx';
// import PostList from './components/PostList.jsx';
// import IndividualPost from './components/IndividualPost.jsx';
// import Form from './components/Form.jsx';

const App = () => {
    //State to hold displayed component
    const [component, setComponent] = useState('homepage');

    //State to hold blog post list
    const [blogPosts, setBlogPosts] = useState([]);

    const chooseComponent = (component) => {
        switch (component) {
            case 'homepage':
                return <HomePage setComponent={setComponent} />;
            case 'list':
                return <PostList setComponent={setComponent} blogPosts={blogPosts} setBlogPosts={setBlogPosts} />;
            case 'full post':
                return <IndividualPost setComponent={setComponent} />;
            case 'form':
                return <Form />;
            default:
                return <HomePage setComponent={setComponent} />;
        }
    }

    return (
        <div className="app">
            <NavBar setComponent={setComponent} />

            {/* {chooseComponent(component)} */}
        </div>
    )
}

export default App
