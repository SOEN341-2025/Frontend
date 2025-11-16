

const useOrg = () => {

    const getOrganization = async (id, token) => {
        const res = await fetch(`http://localhost:3000/api/organization/member/${id}`, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");

        return res.json()
    }
    
    const getUserOrganizations = async (token) => {
        const res = await fetch("http://localhost:3000/api/organization/user", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");

        return res.json()
    }

    const addEventToOrganization = () => {

    }

    const createOrganization = (data, token) => {

    }

    return { getOrganization, getUserOrganizations , createOrganization }
}

export default useOrg