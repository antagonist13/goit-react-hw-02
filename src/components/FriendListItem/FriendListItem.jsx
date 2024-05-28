import clsx from "clsx"
import css from "./FriendListItem.module.css"
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const containerClass = clsx(
    css.onlineStatus,
    isOnline ? css.online : css.offline
    );
    
    return <>
        <img className={css.image} src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={containerClass}>{isOnline ? "Online" : "Offline"}</p>
    </>

}