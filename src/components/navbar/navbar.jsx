import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import useAuth from "../../hooks/useAuth";


export default function Navbar() { 

  const { userState } = useAuth()
  const { user, logout } = userState();


  const login_logout = user.token == '' ? <>
    <NavLink to="/login" className={({ isActive }) =>
      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
      Login
    </NavLink>
  </> :
  <>
    <button className={({ isActive }) => 
      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
      
      onClick={logout}
      
    >
      Logout
    </button>
  </>

  return (
    <header className={styles.container}>
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

        <NavLink to="/ticket" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Tickets
        </NavLink>


        {login_logout}
        
      </nav>
      <div className={styles.headerBar}></div>
    </header>
  );
}
