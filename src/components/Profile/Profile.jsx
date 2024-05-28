import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return <div className={css.userCard}>
  <div className={css.userCardTop}>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.userCardBot}>
    <li className={css.userInfo}>
                <span>Followers</span>
        <span> <b>{stats.followers}</b></span>
    </li>
    <li className={css.userInfo}>
      <span>Views</span>
      <span><b>{stats.views}</b></span>
    </li>
    <li className={css.userInfo}>
      <span>Likes</span>
      <span><b>{stats.likes}</b></span>
    </li>
  </ul>
</div>
}