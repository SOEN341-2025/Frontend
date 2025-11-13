
import { useState } from "react"

const useOrg = () => {

    const getOrganization = (id) => {

    }

    const getOrganizationAnalytics = (id, token) => {

    }
    
    const getUserOrganizations = async (token) => {
        
        const res = await fetch("http://localhost:3000/api/user/organizations", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");

        return res.json()

    }

    const createOrganization = (data, token) => {

    }

    return { getOrganization , getOrganizationAnalytics , getUserOrganizations , createOrganization }
}

export default useOrg