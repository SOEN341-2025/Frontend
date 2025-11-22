import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useOrg from "../../hooks/useOrg";
import OrganizerEventCard from "../../components/OrganizerEventCard/OrganizerEventCard";
import OrganizerMemberCard from "../../components/OrganizerMemberCard/OrganizerMemberCard";
import styles from "./OrganizationHome.module.css"
import AddEventForm from "../../components/AddEventForm";


export default function OrganizationHome(){

    const { getOrganization } = useOrg()
    const { userState } = useAuth();
    const { user }  = userState()
    const { id } = useParams();

    const [ org, setOrg ] = useState({name:'',events:[], users:[]})
    const [ viewMode, setViewMode ] = useState(0)

    const bsdm_map = [styles.bdsm0, styles.bdsm1, styles.bdsm2]

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
                <span className={ viewMode==0 && styles.active} onClick={() =>setViewMode(0)}>
                    Events
                </span>
                <span className={ viewMode==1 && styles.active} onClick={() =>setViewMode(1)}>
                    Members
                </span>
                <span className={ viewMode==2 && styles.active } onClick={() =>setViewMode(2)}>
                    Add Event
                </span>
            </div>

            <div className={bsdm_map[viewMode]}>   
                <div className={styles.page}>
                    {mappedEvents}
                </div>

                <div className={styles.page}>
                    <div className={styles.membersTable}>
                        <div className={styles.membersTableHeader}>
                            <span>Name</span>
                            <span>Email</span>
                            <span>Role</span>
                            <span>Action</span>
                        </div>
                        {mappedMembers}
                        <button className={styles.addMemberBtn}>
                            Add Member
                        </button>
                    </div>

                </div>

                <div className={styles.page}>
                    <AddEventForm />
                </div>
            </div>

        </div>
    )
}