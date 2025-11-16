import useAuth from "../../hooks/useAuth"
import useTicket from "../../hooks/useTicket"
import { useState, useEffect } from "react"
import TicketCard from "../../components/TicketCard/TicketCard"
import styles from "./TicketsList.module.css"

export default function TicketList() {

    const [ tickets, setTickets ] = useState([])
    const { getTickets } = useTicket()
    const { userState } = useAuth()
    const { user } = userState();


    useEffect(() => {
        getTickets(user.token).then(res => setTickets(res))
    }, [])

    
    let mappedTickets = tickets.map(t => <TicketCard ticket={t} />)


    return(
        <div className={styles.container}>
            {mappedTickets}
        </div>

    )
}