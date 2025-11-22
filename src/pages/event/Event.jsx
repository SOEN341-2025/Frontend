
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useEvents from "../../hooks/useEvents";
import { useEffect , useState } from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./Event.module.css";


function EventDetails() {
  const { event_id } = useParams();
  const { userState } = useAuth()
  const { user } = userState()

  const { getTicketAnalytics } = useEvents()
  const [ event, setEvent] = useState({title: "", created_date: "", tickets: []})

  useEffect(() => {
    getTicketAnalytics(user.token, event_id).then(res => setEvent(res))
  }, [])

  console.log(event)

  const createdPoint = { time: event.created_date , value: 0 }

  const today = new Date().toISOString().split('T')[0];

  const data = [
    createdPoint,
    { time: today, value: 0}
  ];

  const hasBeenClaimed = event.tickets.length > 0

  let ticketsMap = <>
  </>

  if (hasBeenClaimed) {
    ticketsMap = event.tickets.map(t => 
    <div className={styles.tableRow}>
      <p>{t.user.name}</p>
      <p>{t.user.email}</p>
      <p>{today}</p>
      <p>Not claimed</p>
    </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1>{event.title} Details</h1>
      <div className={styles.description}>
          <p>Name: {event.title}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
      </div>

      { hasBeenClaimed ? 
        <>
          <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.ticketsTable}>
            <div className={styles.header}>
              <h3>Tickets</h3>
              <button>Export Tickets</button>
            </div>
            {ticketsMap}
          </div>
        </> 
      : 
        <p>No One has bought this ticket yet</p>
      }
      
    </div>
    
  );
}

export default EventDetails;