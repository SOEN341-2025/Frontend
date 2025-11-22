import { useState, useEffect } from "react"
import styles from "./Admin.module.css"

export default function Admin() {

    const [adminData, setAdminData] = useState({users : [], organizations: [], requests: []})
    const [viewMode, setViewMode] = useState(0)

    tableSourceArray = [adminData.users, adminData.organizations, adminData.requests]

    const tablerows = tableSourceArray[viewMode].map(r => <p>row</p>)

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <p onClick={() => setViewMode(0)}>Users</p>
                <p onClick={() => setViewMode(1)}>Organizations</p>
                <p onClick={() => setViewMode(2)}>Requests</p>
            </div>

            <div className={styles.table}>

            </div>
        </div>
    )
}