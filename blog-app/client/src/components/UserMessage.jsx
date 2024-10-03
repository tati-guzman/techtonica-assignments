//Import functionalities
import React from 'react';

const UserMessage = ({ submitStatus, isOpen, onClose, message }) => {
    if(!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{submitStatus ? "Success! Thanks for submitting content!" : "Uh oh!"}</h3>
                <p>{message}</p>
                <button onClick={onClose}>Close Message</button>
            </div>
        </div>
    )
}

export default UserMessage