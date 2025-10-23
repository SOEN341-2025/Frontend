import EventCard from "../../components/EventCard/EventCard";
import styles from "./home.module.css"
import { useEvents } from "../../hooks/useEvents";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home(){

    const {events, buyEvent} = useEvents()

    const { userState } = useAuth()
    const { user } = userState();
    const navigate = useNavigate();

    const onBuy = (id) => {


        if(user.token == "") {
            navigate("/login")
            return
        }
        buyEvent(id, user.token)
        console.log("Event Added")
    }

    const mappedEvents = events ? events.map(e => <EventCard event={e} key={e.id} onBuy={() =>{onBuy(e.id)}} onWishList={() => {}} />) : <p>fuck u</p>


    return (

        <>
            <div className={styles.container}>
                {mappedEvents}
            </div>
        </>
    )

}

export default Home;