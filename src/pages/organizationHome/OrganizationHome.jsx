import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useOrg from "../../hooks/useOrg";
import OrganizerEventCard from "../../components/OrganizerEventCard/OrganizerEventCard";
import styles from "./OrganizationHome.module.css"



export default function OrganizationHome(){

    const { getOrganization } = useOrg()
    const { userState } = useAuth();
    const { user }  = userState()
    const { id } = useParams();

    const [ org, setOrg ] = useState({name:'',events:[]})
    const [ viewEvents, setViewEvents ] = useState(true)

    useEffect(() => {
        getOrganization(id, user.token).then(res => {
            setOrg(res)
        })

    }, [])

    let mappedEvents = <></>
    console.log(org)
    if (org.events.length != 0) {
        mappedEvents = org.events.map( e => <OrganizerEventCard event={e} />)
    }


    return(
        <div className={styles.container}>
            <h1>{org.name} Home</h1>

            <div className={styles.slider}>
                <span className={ viewEvents && styles.active} onClick={() =>setViewEvents(true)}>
                    Events
                </span>
                <span className={ !viewEvents && styles.active} onClick={() =>setViewEvents(false)}>
                    Members
                </span>
            </div>

            <div className={styles.bdsm}>   
                <div className={viewEvents ? styles.onEvents : styles.offEvents}>
                    {mappedEvents}
                </div>

                <div className={viewEvents ? styles.offUsers : styles.onUsers}>
                    {mappedEvents}
                </div>
            </div>

        </div>
    )
}