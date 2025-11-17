import styles from "./OrganizerMemberCard.module.css"

export default function OrganizerMemberCard(props) {

    return(
        <div className={styles.container}>
            <span>{props.user.name}</span>
            <span>{props.user.email}</span>
            <span>{props.user.role}</span>
            <button disabled>Remove</button>
        </div>
    )
}