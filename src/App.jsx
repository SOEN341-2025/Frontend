
import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPage from './pages/loginsignup/LoginSignup';
import useAuth from './hooks/useAuth';
import Add_event_page from './pages/addEventPage/addEventPage';
import Home from "./pages/home/home";
import Layout from "./components/Layout";
import Event from "./pages/event/Event"
import Contact_Page from './pages/ContactPage/ContactPage';
import Ticket from './pages/ticket/Ticket';
import OrganiserCalendar from './components/OrganiserCalendar';

import EventDiscoveryPage from './pages/EventDiscoveryPage';

function App() {

  const { AuthProvider } = useAuth()

   return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Add_event_page" element={<OrganiserCalendar />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="services" element={<h2>Services Page</h2>} />
        <Route path="contact" element={<Contact_Page/>} />
        <Route path="ticket" element={<Ticket/>}/>
        <Route path="login" element={<LoginPage/>} />
        <Route path="student-events" element={<EventDiscoveryPage/>} />
      </Route>
    </Routes>
    </AuthProvider>
  );
}


export default App