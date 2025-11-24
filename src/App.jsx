import {Routes, Route} from "react-router-dom"

// Custom
import PrivateRoutes from './utils/PrivateRoutes';
import OwnerProtectedRoutes from "./utils/OwnerRoutes";
import AdminRoutes from "./utils/AdminRoutes"
import useAuth from './hooks/useAuth';

// Pages
import Layout from "./components/Layout";
import LoginPage from './pages/loginsignup/LoginSignup';
import OrganizationsList from './pages/organizationsList/OrganizationsList';
import OrganizationHome from "./pages/organizationHome/OrganizationHome";
import Admin from "./pages/Admin/Admin";
import TicketList from "./pages/ticketsList/TicketsList";
import EventDiscoveryPage from './pages/EventDiscoveryPage';
import Event from './pages/event/Event'

function App() {

  const { AuthProvider } = useAuth()

   return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route index element={<EventDiscoveryPage />} />
        <Route path="about" element={<h2>About Page</h2>} />
        <Route path="services" element={<h2>Services Page</h2>} />
        <Route path="login" element={<LoginPage/>} />

        {/* Protected User Routes */}
        <Route element={<PrivateRoutes />}>

          <Route path='tickets' element={<TicketList />} />
          <Route path='organizationslist' element={<OrganizationsList />} />

          {/* Organization Routes */}
          <Route path="organization/:id" element={<OwnerProtectedRoutes />} >
            <Route index element={<OrganizationHome />} />
            <Route path="event/:event_id" element={<Event />} />
          </Route>

          {/* Admin routs */}
          <Route path="admin" element={<AdminRoutes />}>
            <Route index element={<Admin />}/>
          </Route>

        </Route>

      </Route>

    </Routes> 
    </AuthProvider>
  );
}


export default App