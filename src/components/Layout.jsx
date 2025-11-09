import React from 'react';
import Header from "./Header";
import Navbar from "./navbar/navbar";
import Footer from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header/>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}