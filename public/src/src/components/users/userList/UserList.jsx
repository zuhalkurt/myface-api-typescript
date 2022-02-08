import React from "react";
import { User } from "../user/User.jsx";

export function UserList({ userList }) {
    return <div>
        {userList.map((user, index) => (
            <li key={index}>
                <User user={user} />
            </li>
        ))}
    </div>
}
