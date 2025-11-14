

const useTicket = () => {

    const getTickets = async (token) => {
        const res = await fetch("http://localhost:3000/api/user/ticket", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!res.ok) throw new Error("Unauthorized");
        return res.json()
    }

    const buyTicket = (token, eventId) => {

    }

    return { getTickets, buyTicket }

}


export default useTicket