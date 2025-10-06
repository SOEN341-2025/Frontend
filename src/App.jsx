
import React from 'react'
import {Routes, Route} from "react-router-dom"
import AddEventPage from './pages/addEventPage/addEventPage';
import Home from "./pages/home/Home";

function App() {
  

  return (  
    <>
      <main className = "main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addEventPage" element={<AddEventPage />}/>
        </Routes>
      </main>
     
    </>
  );

}

export default App