
import styles from "./OrganizationCard.module.css"

export default function OrganizationCard(props) {

    return (
    <div className={styles.container}>
        <img src={`http://localhost:3000/uploads/${props.src}`}/>
        <p>{props.name}</p>
        <a href={`/organization/${props.id}`}><button>View</button></a>
    </div>
    )
}