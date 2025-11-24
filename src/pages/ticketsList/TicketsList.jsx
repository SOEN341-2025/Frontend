import useAuth from "../../hooks/useAuth"
import useTicket from "../../hooks/useTicket"
import { useState, useEffect } from "react"
import TicketCard from "../../components/TicketCard/TicketCard"
import styles from "./TicketsList.module.css"
import QrCode from "../../components/Qrcode/QrCode"

export default function TicketList() {

    const [ tickets, setTickets ] = useState([])
    const { getTickets } = useTicket()
    const { userState } = useAuth()
    const { user } = userState();
    
    //Added a stat to store the selected ticket
    const [selectedTicket, setSelectedTicket] = useState(null);

    //pass a callback to TicketCard
    let mappedTickets = tickets.map(t =>
        <TicketCard ticket={t} onGenerate={() => setSelectedTicket(t)} />
    );
    


    useEffect(() => {
        getTickets(user.token).then(res => setTickets(res))
    }, [])


    return(
        <>
        <div className={styles.container}>
            {mappedTickets}
        </div>

        <QrCode selectedTicket={selectedTicket}/>
        
        </>

    )
}