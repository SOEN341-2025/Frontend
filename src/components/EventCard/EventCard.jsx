
import style from "./EventCard.module.css"

export default function EventCard(props) {
    return(
        <div className={style.card}>
            <h4>{props.event.title}</h4>
            <img src={"http://localhost:3000/uploads/" + props.event.icon }/>
            <div>
                <span>Price: {props.event.price}$</span>
                <span>Location: {props.event.location}</span>
            </div>
            <button>Details</button>
        </div>
    )
}