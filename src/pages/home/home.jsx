import EventCard from "../../components/EventCard/EventCard";
import styles from "./home.module.css"
import useEvents from "../../hooks/useEvents";
import PopUp from "../../components/popUp/PopUp";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

function Home(){

    const {events} = useEvents()
    const [ selectedEventId, setSelectedEventId ] = useState(-1)
    const mappedEvents = events ? events.map((e) => <EventCard event={e} key={e.id} claimClick={() => {setSelectedEventId(e.id)}}/>) : <p>There are no events at the current moment</p>

    const selectedName = selectedEventId!=-1 ? (events.find(e => e.id == selectedEventId)).title : ""

    return (

        <>
            <div className={styles.container}>
                {mappedEvents}
            </div>

            <PopUp id={selectedEventId} name={selectedName} close={() => {setSelectedEventId(-1)}}/>
        </>
    )

}

export default Home;