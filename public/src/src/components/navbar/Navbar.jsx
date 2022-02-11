import React from "react";
import {  Link } from "react-router-dom";

export function Navbar () {
    return <nav>
           <Link to="posts">Posts</Link>
           <Link to="users">Users</Link>
           <Link to="posts/create">Create Post</Link>
           <Link to="users/create">Create User</Link>
        </nav>

}
