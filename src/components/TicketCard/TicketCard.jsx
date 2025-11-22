import styles from "./TicketCard.module.css"

export default function TicketCard(props) {

    return(
        <div className={styles.container}>
            <img src={`http://localhost:3000/uploads/${props.ticket.icon}`}/>
            <p>Event Name : {props.ticket.title}</p>
            <p>Location : {props.ticket.location}</p>
            <p>Date : {props.ticket.date}</p>
            <p>Price : { props.ticket.price == "0" ? "Free" : `$${props.ticket.price}`}</p>
            <button>Generate QR Code</button>
        </div>
    )

}