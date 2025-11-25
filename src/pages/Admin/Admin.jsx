import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import styles from "./Admin.module.css"
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard"

export default function Admin() {

    const [adminData, setAdminData] = useState({users : [], organizations: [], requests: []})
    const [viewMode, setViewMode] = useState(0)

    const {userState} = useAuth()
    const { user } = userState()
    const token = user.token

    useEffect(() => {
        const fetchAdmin = async () => {

            try {
                const res = await fetch("http://localhost:3000/api/test", {
                    method: "Get",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
                

                if (!res.ok) throw new Error("Request failed: " + res.status);

                const data = await res.json();

                setAdminData(data);

        } catch (err) {
            console.error(err);
        }
    };

    fetchAdmin();
}, []);

    let data = <></>

    if (viewMode == 0 && adminData.users.length != 0) {
        data = adminData.users.map(d => <tr><td>{d.name}</td><td>{d.email}</td></tr>)
    }

    let org = <></>

    if(adminData.organizations.length != 0) {
        org = adminData.organizations.map(o => <OrganizationCard id={o.id} src={o.icon} name={o.name} />)
    }
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <p onClick={() => setViewMode(0)}>Users</p>
                <p onClick={() => setViewMode(1)}>Organizations</p>
                <p onClick={() => setViewMode(2)}>Requests</p>
            </div>

            <table className={styles.table}>
                {data}
            </table>
            
            {org}

        </div>
    )
}