import OrganizationCard from "../../components/OrganizationCard/OrganizationCard"
import useOrg from "../../hooks/useOrg"
import { useState, useEffect } from "react"

export default function OrganizationsAll() {

    const [ orgs, setOrgs ] = useState([])
    const { getAllOrganizations } = useOrg()

    useEffect(() => {
        getAllOrganizations().then(res => setOrgs(res))
    }, [])

    let mappedOrgs = <></>

    if (orgs.length != 0) {
        mappedOrgs = orgs.map(o => <OrganizationCard id={o.id} src={o.icon} name={o.name} />)
    }

    return (
    <div>
        {mappedOrgs}
    </div>
    )
}