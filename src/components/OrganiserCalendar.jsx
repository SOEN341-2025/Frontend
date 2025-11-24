import React, { useState } from "react";
import "./calendarStyles.css";
import AddEventForm from "./AddEventForm";
import EventAnalytics from "./EventAnalytics";

export default function OrganiserCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([]);

  const today = new Date();

  // Change month (delta = -1 for prev, +1 for next)
  const changeMonth = (delta) => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + delta, 1);
    setCurrentMonth(newMonth);
  };

  // Generate dates for the current month
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) =>
    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
  );

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedDate(null);
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Event Calendar</h2>

      {/* Month navigation */}
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => changeMonth(-1)}>← Prev</button>
        <span style={{ margin: "0 1rem", fontWeight: "bold" }}>
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button onClick={() => changeMonth(1)}>Next →</button>
      </div>

      {/* Calendar grid */}
      <div className="my-calendar">
        {dates.map((date) => {
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === today.toDateString();
          const hasEvent = events.some(ev => new Date(ev.date).toDateString() === date.toDateString());

          return (
            <div
              key={date.toDateString()}
              className={`my-calendar__tile ${isSelected ? "my-calendar__tile--selected" : ""} ${isToday ? "my-calendar__tile--today" : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {date.getDate()}
              {hasEvent && <span className="event-dot">•</span>}
            </div>
          );
        })}
      </div>

  {/* Analytics */}
  <EventAnalytics events={events} />

  {/* Event form */}
      {showForm && selectedDate && (
        <div
          style={{
            marginTop: "2rem",
            border: "2px solid #304acbff",
            borderRadius: "10px",
            padding: "1.5rem",
            width: "60vw",
            maxWidth: "800px",
            marginInline: "auto",
            backgroundColor: "#f9f9f9",

          }}
        >
          <h3>Adding event for: {selectedDate.toDateString()}</h3>

          <AddEventForm selectedDate={selectedDate} onAddEvent={handleAddEvent} />

          <button
            onClick={closeForm}
            style={{
              marginTop: "1rem",
              backgroundColor: "#421c1cff",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Close Form
          </button>
        </div>
      )}
    </div>
  );
}
