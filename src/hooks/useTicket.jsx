

const useTicket = () => {

    const getTickets = async (token) => {
        const res = await fetch("http://localhost:3000/api/ticket", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");
        return res.json()
    }

    const buyTicket = async (token, eventId) => {
        const res = await fetch("http://localhost:3000/api/ticket", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                eventId : eventId
            })
        })

        if (!res.ok) throw new Error("Unauthorized");
        return res.json()
    }

    return { getTickets, buyTicket }

}


export default useTicket