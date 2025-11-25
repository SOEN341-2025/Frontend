
import useOrg from "../../hooks/useOrg"
import styles from "./OrganizationsList.module.css"
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard"
import useAuth from "../../hooks/useAuth"
import { useState , useEffect } from "react"
import OrganizationForm from "../../components/organizationForm/OrganizationForm"

export default function OrganizationsList() {

    const { userState } = useAuth()
    const { user } = userState()
    const { getUserOrganizations } = useOrg()
    const [ orgs, setOrgs] = useState([])
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
        getUserOrganizations(user.token).then( res => {
            setOrgs(res)
        })
    }, [])

    let mappedOrgs = <></>
    console.log(orgs)
    if (orgs.length != 0) {
        mappedOrgs = orgs.map(o => <OrganizationCard id={o.id} src={o.icon} name={o.name} />)
    }

    // Update click handler
    const handleCreateClick = () => {
        setShowForm(true); 
    }

    const handleCloseClick = () => {
        setShowForm(false);
    }

    return(
        <>
            <div className={styles.container}>
                {mappedOrgs}
            </div>
            <div className={styles.createOrgDiv}>
                <button onClick={handleCreateClick}>
                    Create Organization
                </button>
            </div>

            {/* The form is rendered when showForm = true */}
            {showForm && <OrganizationForm/>}
            
        </>
    )
}