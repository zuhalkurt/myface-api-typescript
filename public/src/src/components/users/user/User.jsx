import React from "react";

export function User({ user }) {
    return <div>
        <img src={user.profileImageUrl} alt={user.name}/>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
        
    </div>
}

