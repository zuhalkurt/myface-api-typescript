import React from "react";
import {Link} from "react-router-dom";

export function User({ user }) {
    return <div className="user">
            <img className="user-image" src={user.profileImageUrl} alt={user.name}/>
        <Link to={`/users/${user.id}`}>
            <h2>{user.name}</h2>
        </Link>
        <p className="user-email">{user.email}</p>
        <p className="user-user-name">{user.username}</p>
    </div>
}

