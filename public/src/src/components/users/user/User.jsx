import React from "react";
import {Link} from "react-router-dom";

export function User({ user }) {
    return <div>
        <img src={user.profileImageUrl} alt={user.name}/>
        <Link to={`/users/${user.id}`}>
            <h2>{user.name}</h2>
        </Link>
        <p>{user.email}</p>
        <p>{user.username}</p>
        
    </div>
}

