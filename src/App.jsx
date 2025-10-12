
import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPage from './pages/loginsignup/LoginSignup';
import Add_event_page from './pages/addEventPage/addEventPage';
import Home from "./pages/home/home";
import Layout from "./components/Layout";
import Contact_Page from './pages/ContactPage/ContactPage';



function App() {
   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Add_event_page" element={<Add_event_page />} />
        {/*placerholders for now */}
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="services" element={<h2>Services Page</h2>} />
        <Route path="contact" element={<Contact_Page/>} />
        <Route path="login" element={<LoginPage/>} />
      </Route>
    </Routes>
  );
}


export default App