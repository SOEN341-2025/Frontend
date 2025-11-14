import useAuth from "../../hooks/useAuth"
import useTicket from "../../hooks/useTicket"
import { useState, useEffect } from "react"

export default function TicketList() {

    const [ tickets, setTickets ] = useState([])
    const { getTickets } = useTicket()
    const { userState } = useAuth()
    const { user } = userState();


    useEffect(() => {
        getTickets(user.token).then(res => setTickets(res))
    }, [])

    console.log(tickets)
    let mappedTickets = <></>


    return(
        <>
            meow
        </>

    )
}