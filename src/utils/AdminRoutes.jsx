import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoutes = () => {

    const { userState } = useAuth()
    const { user } = userState()

    if (user.isAdmin) return <Outlet />


    return <h1>Not authorized</h1>
}
export default AdminRoutes