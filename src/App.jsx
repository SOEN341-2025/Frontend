
import {Routes, Route} from "react-router-dom"
import LoginPage from './pages/loginsignup/LoginSignup';
import useAuth from './hooks/useAuth';
import Home from "./pages/home/home";
import PrivateRoutes from './utils/PrivateRoutes';
import Layout from "./components/Layout";
import OrganizationsList from './pages/OrganizationsList/OrganizationsList';
import Contact_Page from './pages/ContactPage/ContactPage';
import TicketList from "./pages/ticketsList/TicketsList";
import OrganiserCalendar from './components/OrganiserCalendar';

import EventDiscoveryPage from './pages/EventDiscoveryPage';

function App() {

  const { AuthProvider } = useAuth()

   return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="services" element={<h2>Services Page</h2>} />
        <Route path="contact" element={<Contact_Page/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="student-events" element={<EventDiscoveryPage/>} />


        {/* Protected User Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path='tickets' element={<TicketList />} />
          <Route path='organizationslist' element={<OrganizationsList />} />
          <Route path="Add_event_page" element={<OrganiserCalendar />} />
        </Route>

        {/* Admin routs */}
      </Route>
    </Routes> 
    </AuthProvider>
  );
}


export default App