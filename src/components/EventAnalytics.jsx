

import React, { useMemo } from "react";

export default function EventAnalytics({ events }) {
  const analytics = useMemo(() => {
    if (!events || events.length === 0) return null;
    // NOTE: ticketsBought and totalPrice are placeholders (0).
    // TODO: linking ticket data.
    let totalTickets = 0;
    let totalRevenue = 0;
    const trends = events.map((event) => {
      // TODO: compute `ticketsBought` by counting tickets linked to this event
      // (e.g., tickets.filter(t => t.eventId === event.id).length)
      const ticketsBought = 0; 
      // TODO: compute `totalPrice` by summing ticket prices for this event
      const totalPrice = 0; 
      totalTickets += ticketsBought;
      totalRevenue += totalPrice;
      return {
        date: event.date,
        name: event.title,
        capacity: event.capacity,
        price: event.typeOfEvent === "paid" ? event.price : "Free",
        ticketsBought,
        totalPrice,
      };
    });
    return {
      numEvents: events.length,
      totalTickets,
      totalRevenue,
      trends,
    };
  }, [events]);

  if (!events || events.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Event Analytics</h2>
        <p>No events yet. Add an event to see analytics.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", background: "#f7f7ff", borderRadius: "12px", boxShadow: "0 2px 8px #ddd" }}>
      <h2 style={{ textAlign: "center" }}>Event Analytics</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
        <div>
          <h3>{analytics.numEvents}</h3>
          <p>Events</p>
        </div>
        <div>
          <h3>{analytics.totalTickets}</h3>
          <p>Tickets Issued</p>
        </div>
        <div>
          <h3>${analytics.totalRevenue.toLocaleString()}</h3>
          <p>Total Revenue</p>
        </div>
      </div>
      <h3 style={{ marginBottom: "1rem" }}>Participation Trends</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
        <thead>
          <tr style={{ background: "#e0e0ff" }}>
            <th>Date</th>
            <th>Name</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Tickets Bought</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {analytics.trends.map((trend, idx) => (
            <tr key={idx}>
              <td>{trend.date}</td>
              <td>{trend.name}</td>
              <td>{trend.capacity}</td>
              <td>{trend.price}</td>
              <td>{trend.ticketsBought}</td>
              <td>${trend.totalPrice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
