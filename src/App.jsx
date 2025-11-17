import {Routes, Route} from "react-router-dom"

// Custom
import PrivateRoutes from './utils/PrivateRoutes';
import OwnerProtectedRoutes from "./utils/OwnerRoutes";
import useAuth from './hooks/useAuth';

// Pages
import LoginPage from './pages/loginsignup/LoginSignup';
import Home from "./pages/home/home";
import Layout from "./components/Layout";
import OrganizationsList from './pages/organizationsList/OrganizationsList';
import Contact_Page from './pages/ContactPage/ContactPage';
import OrganizationHome from "./pages/organizationHome/OrganizationHome";
import TicketList from "./pages/ticketsList/TicketsList";
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

          {/* Organization Routes */}
          <Route path="organization/:id" element={<OwnerProtectedRoutes />} >
            <Route index element={<OrganizationHome />} />
            {/* <Route path="add" element={<OrganiserCalendar />} /> */}
          </Route>

          {/* Admin routs */}
          <Route path="admin">
            <Route index />
            <Route path="users" />
            <Route path="organizations" />
            <Route path="events" />
          </Route>

        </Route>

      </Route>

    </Routes> 
    </AuthProvider>
  );
}


export default App