// Djessica Ndjiongue
// 11/2/2025 , 12:36 pm

// This page will handle :
// - browsing events 
// - searching / filtering events 
// - saving events to personal calendar
// -claiming tickets & showing QR codes

import {useState} from "react";
import EventCard from "../components/EventCard/EventCard";
import useEvents from "../hooks/useEvents";
import PopUp from "../components/popUp/PopUp";
import "./EventDiscoveryPage.css";

export default function EventDiscoveryPage() {
    const { events } = useEvents(); // fetch events
    const [filters, setFilters] = useState ({category: "", date: "", organization:"", title: ""});
    const [ selectedEventId, setSelectedEventId ] = useState(-1)
  
    //const selectedName = selectedEventId!=-1 ? (events.find(e => e.id === selectedEventId)).title : ""
    const selectedEvent = events.find(event => event.id === selectedEventId);
    const selectedName = selectedEvent? selectedEvent.title : "";


    const categories = [
        "",
        "Entrepreneurship",
        "Business",
        "Arts",
        "Tech",
        "Culture",
        "Political",
        "Workshop",
        "Social",
        "Sports",
        "Music",
        "Volunteering",
        "Networking",
        "Gaming",
        "Health & Wellness",
        "Environmental",
    ];


    // for now, it is hardcoded, I'll later change it such 
    // that it displays those entered by the organisers

    const organizations = [
        "", // empty = All
        "Space Concordia",
        "Graduate Students’ Association",
        "Concordia Student Union",
        "AIESEC",
        "Concordia Engineering and Computer Science Society",
        "Concordia Computer Science Club",
        "Concordia International Students Association",
        "Concordia Environmental Action Club",
        "Concordia Music Society",
        "Concordia Dance Club",
        "Concordia Gaming Society",
        "ACSioN",
        "ASAC",
        "FOCUS",
        "ASCEND",
        "HSAC",
        "CCSU",

    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    // Filter events based on selection
   const filteredEvents = events.filter((event) => {
    return (
      (!filters.category || event.category === filters.category) &&
      (!filters.date || event.date === filters.date) &&
      (!filters.organization || event.organization === filters.organization) &&
      (!filters.title || event.title.toLowerCase().startsWith(filters.title.toLowerCase()))
    );
  });


  return (
    <div>

      {/* Filters */}
      <div className="filters-container">
        <input className="date-filter" type="date" name="date" value={filters.date} onChange={handleFilterChange} />

        <select className="organization-filter" name="organization" value={filters.organization} onChange={handleFilterChange}>
          {organizations.map((o) => (
            <option key={o} value={o}>
              {o === "" ? "All Organizations" : o}
            </option>))}
        </select>
          
        {/*Search bar*/}
        <input className="search-filter" type="text" name="title" placeholder="Search.." value={filters.title} onChange={handleFilterChange}/>

      </div>

      {/* Event list */}
      <div className="event-list">
        {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} claimClick={() => {setSelectedEventId(event.id)}}/>
                    ))
                ) : (
                    <p className="events-missing">No events found.</p>
                )}
      </div>

      <PopUp id={selectedEventId} name={selectedName} close={() => {setSelectedEventId(-1)}}/>

    </div>
  );
}