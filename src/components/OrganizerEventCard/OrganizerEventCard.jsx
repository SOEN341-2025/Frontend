import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./OrganizerEventCard.module.css"

export default function OrganizerEventCard(props) {

    const data = [
        { time: "2025-11-17 10:00", value: 10 },
        { time: "2025-11-17 11:00", value: 15 },
        { time: "2025-11-17 12:00", value: 12 },
        { time: "2025-11-17 13:00", value: 20 },
    ];

    return(
        <div className={styles.container}>
            <img src={`http://localhost:3000/uploads/${props.event.icon}`}/>
            <p>Event Name : {props.event.title}</p>
            <p>Location : {props.event.location}</p>
            <p>Date : {props.event.date}</p>
            <p>Price : ${props.event.price}</p>
            <a href={`/organization/${props.event.org_id}/event/${props.event.id}`}><button>Get Analitics</button></a>
        </div>
    )
}