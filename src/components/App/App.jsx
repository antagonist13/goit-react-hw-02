import UserData from "/src/userData.json"
import friends from "/src/friends.json";
import transactions from "/src/transactions.json"

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx"
import css from "./App.module.css";

export default function App() {
    return <div >
        <h1 className={css.header}>React Homework 1</h1>
        <h2>Task 1</h2>
            <Profile
                name={UserData.username}
                tag={UserData.tag}
                location={UserData.location}
                image={UserData.avatar}
                stats={UserData.stats}
            />
        <h2>Task 2</h2>
            <FriendList friends={friends} />
        <h2>Task 3</h2>
            <TransactionHistory items={transactions} />
    </div>
}