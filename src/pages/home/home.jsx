import React from "react";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

function Home(){

    const [events, setEvents] = useState([])

    useEffect( () => {
        setEvents(() => {
            fetch("http://localhost:3000/api/event")
            .then(
                (response) => response.json()
            )
            .then(
                (data) => {
                    setEvents(data); // put array into state
                }
            )
            .catch(
                e => console.log(e)
            )
        })
    }, [])


    const mappedEvents = events ? events.map(e => <li key={e.id}>{e.title}</li>) : <p>fuck u</p>

    return (

        <>
        <Header/>
        {mappedEvents}
        </>
    )

}

export default Home;