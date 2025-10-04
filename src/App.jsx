import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Add_event_page from './pages/add_event_page';
import Home from "./pages/home/Home";

function App() {
  
  return (  
    <>
      <main className = "main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Add_event_page" element={<Add_event_page />}/>
        </Routes>
      </main>
     
    </>
  );

}

export default App
