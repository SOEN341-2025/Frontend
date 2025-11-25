import styles from "./PopUp.module.css" 
import useTicket from "../../hooks/useTicket"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function PopUp(props) {

    const eventId = props.id
    const name = props.name
    const close = props.close
    
    const { userState } = useAuth()
    const { user } = userState();

    const { buyTicket } = useTicket()
    const navigate = useNavigate();

    const containerClass = (eventId != -1) ? styles.active : styles.inActive

    const handleClaimClick = () => {
        if (user.token == "") {
            navigate("/login")
            return
        }
        buyTicket(user.token, eventId).then(_ => {
            navigate("/tickets")
        })
    }

    return(
        <div className={containerClass}>
            <div className={styles.card}>    
                <h3>
                    Claim Ticket
                </h3>
                <p>
                    Are you sure you want to claim {name}?
                </p>
                <div className={styles.footer}>
                    <button className={styles.close} onClick={close}>Close</button>
                    <button className={styles.claim} onClick={handleClaimClick}>Claim</button>
                </div>
            </div>
        </div>
    )
}