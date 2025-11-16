
import styles from "./OrganizerEventCard.module.css"

export default function OrganizerEventCard(props) {

    return(
        <div className={styles.container}>
            <img src={`http://localhost:3000/uploads/${props.event.icon}`}/>
            <p>Event Name : {props.event.title}</p>
            <p>Location : {props.event.location}</p>
            <p>Date : {props.event.date}</p>
            <p>Price : ${props.event.price}</p>
            <button>Get Analitics</button>
        </div>
    )
}