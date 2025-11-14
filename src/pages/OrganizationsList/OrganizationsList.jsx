
import useOrg from "../../hooks/useOrg"
import styles from "./OrganizationsList.module.css"
import OrganizationCard from "../../components/OrganizationCard/OrganizationCard"
import useAuth from "../../hooks/useAuth"
import { useState , useEffect } from "react"

export default function OrganizationsList() {

    const { userState } = useAuth()
    const { user } = userState()
    const { getUserOrganizations } = useOrg()

    const token = user.token

    const [ orgs, setOrgs] = useState([])

    useEffect(() => {
        getUserOrganizations(user.token).then( res => {
            setOrgs(res)
        })
    }, [])

    let mappedOrgs = <></>
    console.log(orgs)
    if (orgs.length != 0) {
        mappedOrgs = orgs.map(o => <OrganizationCard src={o.icon} name={o.name} />)
    }


    const handleCreateClick = () => {

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
        </>
    )
}