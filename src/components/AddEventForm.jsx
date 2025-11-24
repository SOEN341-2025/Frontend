import React, { useState, useEffect } from "react";
import styles from "./AddEventForm.module.css"

export default function AddEventForm({ selectedDate, onAddEvent }) {
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    typeOfEvent: "",
    price: "",
    capacity: "",
    date: "",
    image: null,
  });

  // When a date is selected on the calendar, set it in the form
  useEffect(() => {
    if (selectedDate) {
      setEventForm((prev) => ({
        ...prev,
        date: selectedDate.toDateString(),
      }));
    }
  }, [selectedDate]);

  // Handles input change for all fields
  const editEventForm = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  // Submit the event to the parent component (OrganiserCalendar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.time) {
      alert("Please add at least a title and time!");
      return;
    }

    onAddEvent(eventForm); // Send data back up
    console.log("Event added:", eventForm);
    setEventForm({
      title: "",
      description: "",
      location: "",
      time: "",
      typeOfEvent: "",
      price: "",
      capacity: "",
      date: selectedDate ? selectedDate.toDateString() : "",
    });
  };

  //Hander for file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventForm({ ...eventForm, image: file});
  }

  return (
    <form onSubmit={handleSubmit} className={styles.addEventForm}>
      <h3 style={{ textAlign: "center" }}>Add Event Details</h3>
      <br/>
    
      <label>
        Title:
        <br />
        
      </label>
      <input
          className={styles.inputStyle}
          type="text"
          name="title"
          value={eventForm.title}
          onChange={editEventForm}
          placeholder="Hackathon 2025"
        />
      <br />

      <div className="addEventImage">
        <label>
          Image:
          <br/>
          <input 
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <br/>

      <label>
        Description:
        <br />
        <textarea
          className={styles.inputStyle}
          name="description"
          value={eventForm.description}
          onChange={editEventForm}
          placeholder="A beginner-friendly programming competition"
        />
      </label>
      <br />

      <label>
        Location:
        <br />
        <input
          className={styles.inputStyle}
          type="text"
          name="location"
          value={eventForm.location}
          onChange={editEventForm}
          placeholder="1455 Blvd. De Maisonneuve Ouest, Montreal"
        />
      </label>
      <br />

      <label>
        Date:
        <br />
        <input
          className={styles.inputStyle}
          type="text"
          name="date"
          value={eventForm.date}
          readOnly
        />
      </label>
      <br />

      <label>
        Time:
        <br />
        <input
          className={styles.inputStyle}
          type="time"
          name="time"
          value={eventForm.time}
          onChange={editEventForm}
        />
      </label>
      <br />

      <label>
        Venue Capacity:
        <br />
        <input
          className={styles.inputStyle}
          type="number"
          name="capacity"
          value={eventForm.capacity}
          onChange={editEventForm}
          placeholder="1000"
          min={1}
        />

      </label>
      <br />

      <label>
        Type of Event:
        <br />
        <input
          type="radio"
          name="typeOfEvent"
          value="paid"
          checked={eventForm.typeOfEvent === "paid"}
          onChange={editEventForm}
        />
        Paid
        {"  "}
        <input
          type="radio"
          name="typeOfEvent"
          value="free"
          checked={eventForm.typeOfEvent === "free"}
          onChange={editEventForm}
        />
        Free
      </label>

      {eventForm.typeOfEvent === "paid" && (
        <>
          <br />
          <label>
            Ticket Price:
            <br />
            <input
              className={styles.inputStyle}
              type="number"
              name="price"
              value={eventForm.price}
              onChange={editEventForm}
              placeholder="50"
            />
          </label>
        </>
      )}

      <br />
      <button
        type="submit"
        style={{
          margin: "0 auto",
          marginTop: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        
        }}
      >
        Add Event
      </button>
    </form>
  );
}
