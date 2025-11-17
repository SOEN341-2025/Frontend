import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useOrg from "../hooks/useOrg";
import useAuth from "../hooks/useAuth";

const OwnerProtectedRoutes = () => {
    const { id } = useParams();
    const { getUserOrganizations } = useOrg();

    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    const { userState } = useAuth()
    const { user } = userState()

    useEffect(() => {
        const verify = async () => {
            try {
                const orgs = await getUserOrganizations(user.token);
                const hasAccess = orgs.some(o => o.id == id);

                setAuthorized(hasAccess);
            } catch (err) {
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        verify();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return authorized ? <Outlet /> : <h1>Not authorized</h1>
}

export default OwnerProtectedRoutes;
