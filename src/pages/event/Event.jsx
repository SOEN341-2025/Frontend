
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



function EventDetails() {
  const { event_id } = useParams();

    const data = [
      { time: "2025-11-17 10:00", value: 10 },
      { time: "2025-11-17 11:00", value: 15 },
      { time: "2025-11-17 12:00", value: 12 },
      { time: "2025-11-17 13:00", value: 20 },
    ];

  return (
    <div>
      <h1>Event Details</h1>
      <p>Event ID: {event_id}</p>

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
    
  );
}

export default EventDetails;