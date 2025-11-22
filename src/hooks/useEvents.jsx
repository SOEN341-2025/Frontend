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

    
    const getTicketAnalytics = async (token, eventId) => {
        try{
            const response = await fetch(`http://localhost:3000/api/event/analytics/${eventId}`, {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            return data
        }
        catch(e){
            console.log(e)
            return {}
        }
    }
    return { events , getTicketAnalytics };
};

export default useEvents;
