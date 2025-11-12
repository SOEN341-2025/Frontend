import style from "./EventCard.module.css";

export default function EventCard(props) {

  const { event, studentView } = props;

  // Save event
  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedEvents")) || [];
    if (!saved.includes(event.id)) {
      localStorage.setItem("savedEvents", JSON.stringify([...saved, event.id]));
      alert("Event saved!");
    } else {
      alert("Event already saved!");
    }
  };

  // Redirect to Ticket page
  const handleClaimTicket = () => {
    window.location.href = `/ticket?id=${event.id}`;
  };

  return (
    <div className={style.card}>
      <h4>{event.title}</h4>
      {event.icon && <img src={`http://localhost:3000/uploads/${event.icon}`} alt={event.title} />}
      {event.price !== undefined && <span>Price: {event.price}$</span>}
      {event.location && <span>Location: {event.location}</span>}
      
      {/* Optional fields for student view */}
      {studentView && (
        <div>
          {event.date && <p>Date: {event.date}</p>}
          {event.category && <p>Category: {event.category}</p>}
          {event.organization && <p>Organization: {event.organization}</p>}
          <div className={style.buttonsContainer}>
            <button className={style.leftButton} onClick={handleSave}>Save</button>
            <button className={style.rightButton} onClick={handleClaimTicket}>Claim</button>
          </div>
        </div>
      )}

    </div>
  );
}
