import EventCard from "../../components/EventCard/EventCard";
import styles from "./home.module.css"
import { useEvents } from "../../hooks/useEvents";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home(){

    const {events} = useEvents()
    const mappedEvents = events ? events.map(e => <EventCard event={e} key={e.id} studentView={true} />) : <p>fuck u</p>

    return (

        <>
            <div className={styles.container}>
                {mappedEvents}
            </div>
        </>
    )

}

export default Home;