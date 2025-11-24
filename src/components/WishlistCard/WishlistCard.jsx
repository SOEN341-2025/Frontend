
import styles from "./WishlistCard.module.css"

export default function WishlistCard(props) {

    return(
        <div className={styles.container}>
            <img src={`http://localhost:3000/uploads/${props.ticket.icon}`}/>
            <p>Event Name : {props.ticket.title}</p>
            <p>Location : {props.ticket.location}</p>
            <p>Date : {props.ticket.date}</p>
            <p>Price : { props.ticket.price == "0" ? "Free" : `$${props.ticket.price}`}</p>
            <button onClick={props.onGenerate}>Remove</button>
        </div>
    )

}