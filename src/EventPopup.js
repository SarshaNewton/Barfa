// EventPopup.js
import React, { useState } from 'react';

function EventPopup({ isOpen, onClose, onCreate }) {
    const [eventName, setEventName] = useState('');

    const handleCreate = () => {
        if (eventName) {
            onCreate(eventName); // Send the event name back to Home component
            setEventName(''); // Clear the input
            onClose(); // Close the popup
        }
    };

    if (!isOpen) return null; // Don't render if the popup is closed

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Create New Event</h2>
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Enter event name"
                />
                <button onClick={handleCreate}>Create Event</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default EventPopup;
