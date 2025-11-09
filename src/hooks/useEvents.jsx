import { useState, useEffect } from "react";

const useEvents = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/event");
                if (!response.ok) throw new Error("Failed to fetch events");
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    const getEvent = (id) => {
        const [event, setEvent] = useState()
        return event
    }

    const makeEvent = (event) => {

    }

    const buyEvent = (id, token) => {

        console.log(token)

        fetch("http://localhost:3000/api/user/add_ticket", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                eventId : id
            })
        })
        .then(res => {
            if (!res.ok) throw new Error("Unauthorized");
            return res.json();
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    return { events , getEvent, buyEvent, makeEvent};
};

export { useEvents };
