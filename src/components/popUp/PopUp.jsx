import styles from "PopUp.module.css" 

export default function PopUp(props) {
    return(
        <div className={styles.container}>
            <h1>
                Claim Ticket
            </h1>
            <p>
                Are you sure you want to claim {props.name}
            </p>
            <footer>
                <button>Close</button>
                <button>Claim</button>
            </footer>
        </div>
    )
}