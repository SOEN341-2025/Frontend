import style from "./EventCard.module.css";
import useTicket from "../../hooks/useTicket";
import useAuth from "../../hooks/useAuth";

export default function EventCard(props) {

  const { event } = props;
  const { userState } = useAuth()
  const { user } = userState()

  // Save event
  const handleSave = () => {

  };

  // Redirect to Ticket page
  const handleClaimTicket = () => {

  };

  return (
    <div className={style.card}>
      <h4>{event.title}</h4>
      {event.icon && <img src={`http://localhost:3000/uploads/${event.icon}`} alt={event.title} />}
      {event.price !== undefined && <span>Price: {event.price}$</span>}
      {event.location && <span>Location: {event.location}</span>}
      
      <div>
        {event.date && <p>Date: {event.date}</p>}
        {event.category && <p>Category: {event.category}</p>}
        {event.organization && <p>Organization: {event.organization}</p>}
        <div className={style.buttonsContainer}>
          <button className={style.leftButton} onClick={handleSave}>Wish List</button>
          <button className={style.rightButton} onClick={handleClaimTicket}>Claim</button>
        </div>
      </div>

    </div>
  );
}
