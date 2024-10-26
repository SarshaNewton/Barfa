// Home.js
import React, { useEffect, useState } from 'react';
import "./styles/haufe.css";
import logo from "./assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import EventPopup from './EventPopup'; // Import the EventPopup component

function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [events, setEvents] = useState([]); // Store events here
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        function eventCol() {
            let colours = ["#EDB107AA", "#F5970AAA", "#F4670AAA", "#D12C2C42", "#F4227242"];
            let eventElements = document.getElementsByClassName("event");
            let i = 0;

            for (let event of eventElements) {
                event.style.backgroundColor = colours[i];
                i = (i + 1) % colours.length;
            }
        }

        eventCol(); // Apply colors on component mount and when events are added
    }, [events]); // Re-run effect when `events` changes

    // Function to handle creation of a new event
    const handleCreateEvent = (eventName) => {
        const newEvent = { id: events.length + 1, name: eventName };
        setEvents([...events, newEvent]); // Add new event to the list
    };

    // Navigate to /Events page with event name in URL when an event is clicked
    const handleEventClick = (eventName) => {
        // Encode event name to make it URL-safe
        const encodedEventName = encodeURIComponent(eventName);
        navigate(`/Events/${encodedEventName}`);
    };

    return (
        <div className="row" id="indexy">
            <div className="twenty" id="sideBar">
                <Link to="/SignIn"><img src={logo} alt="Logo" /></Link>
                <p>Profile</p>
                <Link to="/Events"><p>Events</p></Link>
            </div>
            <div className="eighty" id="main">
                <div className="row">
                    <div
                        className="thirty events"
                        id="addEvent"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        + {/* Click to open popup */}
                    </div>

                    {/* Render each created event dynamically with class "event" */}
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="events"
                            onClick={() => handleEventClick(event.name)} // Navigate on click
                        >
                            {event.name}
                        </div>
                    ))}
                </div>

                {/* Event Popup */}
                <EventPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    onCreate={handleCreateEvent}
                />
            </div>
        </div>
    );
}

export default Home;
