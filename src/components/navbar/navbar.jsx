import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
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
    <button 
      className={styles.logoutButton}
      onClick={logout}
      
    >
      Logout
    </button>
  </>

  const user_nav = user.token != '' && <> 

    <NavLink to="/tickets" className={({ isActive }) =>
      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
        Tickets
    </NavLink>

    <NavLink to="/organizationslist" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          My Organizations
    </NavLink>
    </>
  
  return (
    <div className={styles.container}>
      <nav className={styles.headerNav}>
        <NavLink to="/" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Organizations
        </NavLink>

        <NavHashLink 
          to="#footer" 
          smooth
          className={styles.navLink}
        >
          Contact
        </NavHashLink>

         <NavLink to="/student-events" className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
          Discover events
        </NavLink>

        

        {user_nav}
        {login_logout}
        
      </nav>
      <div className={styles.headerBar}></div>
    </div>
  );
}
