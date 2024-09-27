//Import styling sheets and functionalities
import './App.css';
import React, { useState } from 'react';

//Import all components for use in display
import Landing from './components/Landing.jsx';
import ContactsList from './components/ContactsList.jsx';
import ViewContact from './components/ViewContact.jsx';
// import ContactForm from './components/ContactForm.jsx';

const App = () => {
    
    //State to hold displayed component
    const [component, setComponent] = useState("landing");

    //State to hold contact list
    const [contactList, setContactList] = useState([]);

    //State to hold contact to update
    const [selectedIndividual, setSelectedIndividual] = useState(null);

    const chooseComponent = (component) => {
        switch (component) {
            case 'landing':
                return <Landing setComponent={setComponent} />;
            case 'list':
                return <ContactsList setComponent={setComponent} setContactList={setContactList} contactList={contactList} setSelectedIndividual={setSelectedIndividual} />;
            case 'details':
                return <ViewContact setComponent={setComponent} selectedIndividual={selectedIndividual} setSelectedIndividual={setSelectedIndividual} />;
            case 'form':
                return <ContactForm setComponent={setComponent} selectedIndividual={selectedIndividual} setSelectedIndividual={setSelectedIndividual} />;
            default:
                return <Landing setComponent={setComponent} />;
        }
    }
    
    return (
        <div className="app">
            {chooseComponent(component)}
        </div>
    )
}

export default App