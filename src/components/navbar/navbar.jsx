import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() { 
  return (
    <header>
      <nav className={styles.headerNav}>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          About
        </NavLink>

        <NavLink to="/services" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Services
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Contact
        </NavLink>

        <NavLink to="/Add_event_page" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Add an event
        </NavLink>

        <NavLink to="/login" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Login
        </NavLink>
        
      </nav>
      <div className={styles.headerBar}></div>
    </header>
  );
}
