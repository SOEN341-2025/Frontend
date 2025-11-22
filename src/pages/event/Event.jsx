
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
import exportToCSV from "../../utils/ExportCSV";
import createDateRange from "../../utils/createDates";


function EventDetails() {
  const { event_id } = useParams();
  const { userState } = useAuth()
  const { user } = userState()

  const { getTicketAnalytics } = useEvents()
  const today = new Date().toISOString().split('T')[0];
  const [ event, setEvent] = useState({title: "", created_date: today, tickets: []})

  useEffect(() => {
    getTicketAnalytics(user.token, event_id).then(res => setEvent(res))
  }, [])

  const days = createDateRange(event.created_date, today)
  const data = days.map(t => ({time: t, value: 0}))

  console.log(event)


  const hasBeenClaimed = event.tickets.length > 0

  const handleClick = () => {
    exportToCSV(event.tickets.map(t => ({"name": t.user.name, "email": t.user.email, "status": t.user.status})), `${event.title}.csv`)
  }
  let ticketsMap = <>
  </>

  if (hasBeenClaimed) {

    
    for(let i=0; i < data.length;i++) {
      event.tickets.forEach(t => {
        if(data[i].time == t.bought_time)
          data[i].value = data[i].value + 1
      })
    }

    ticketsMap = event.tickets.map(t => 
    <div className={styles.tableRow}>
      <p>{t.user.name}</p>
      <p>{t.user.email}</p>
      <p>{t.bought_time}</p>
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
              <button onClick={handleClick}>Export Tickets</button>
            </div>
            {ticketsMap}
          </div>
        </> 
      : 
        <p>No One has registered for this event yet</p>
      }
      
    </div>
    
  );
}

export default EventDetails;