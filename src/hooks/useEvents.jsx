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

    const getWishList = async (token) => {
        const res = await fetch("http://localhost:3000/api/user/wishlist", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");
        return res.json()
    }

    const addToWishList = async (token, eventId) => {
        const res = await fetch("http://localhost:3000/api/user/wishlist", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                id : eventId
            })
        })

        if (!res.ok) throw new Error("Unauthorized");
        return res.json()
    }

    return { events , getTicketAnalytics , getWishList , addToWishList };
};

export default useEvents;
