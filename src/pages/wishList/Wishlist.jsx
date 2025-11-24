import styles from "./Wishlist.module.css"
import useAuth from "../../hooks/useAuth";
import useEvents from "../../hooks/useEvents";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { useEffect, useState } from "react";

export default function Wishlist() {

    const [ wishList, setWishList ] = useState([])
    const { getWishList } = useEvents()
    const { userState } = useAuth()
    const { user } = userState();

    //pass a callback to TicketCard
    let mappedTickets = wishList.map(t =>
        <WishlistCard ticket={t} />
    );
    


    useEffect(() => {
        getWishList(user.token).then(res => setWishList(res))
    }, [])


    return(
        <>
            <div className={styles.container}>
                {mappedTickets}
            </div>
        </>

    )
}