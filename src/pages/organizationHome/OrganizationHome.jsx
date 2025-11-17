import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useOrg from "../../hooks/useOrg";
import OrganizerEventCard from "../../components/OrganizerEventCard/OrganizerEventCard";
import OrganizerMemberCard from "../../components/OrganizerMemberCard/OrganizerMemberCard";
import styles from "./OrganizationHome.module.css"



export default function OrganizationHome(){

    const { getOrganization } = useOrg()
    const { userState } = useAuth();
    const { user }  = userState()
    const { id } = useParams();

    const [ org, setOrg ] = useState({name:'',events:[], users:[]})
    const [ viewEvents, setViewEvents ] = useState(true)

    useEffect(() => {
        getOrganization(id, user.token).then(res => {
            setOrg(res)
        })

    }, [])

    let mappedEvents = <></>
    console.log(org)
    if (org.events.length != 0) {
        mappedEvents = org.events.map( e => <OrganizerEventCard key={e.id} event={e} />)
    }


    let mappedMembers = <></>
    if (org.users.length != 0) {
        mappedMembers = org.users.map( u => <OrganizerMemberCard user={u} />)
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
                    <div className={styles.membersTable}>
                        <div className={styles.membersTableHeader}>
                            <span>Name</span>
                            <span>Email</span>
                            <span>Owner</span>
                            <span>Action</span>
                        </div>
                        {mappedMembers}
                        <button className={styles.addMemberBtn}>
                            Add Member
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}