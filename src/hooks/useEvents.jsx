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

    

  }

  return { events };
};

export { useEvents };
