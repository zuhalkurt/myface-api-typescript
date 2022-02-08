import React, { useEffect, useState } from "react";
import { UserList } from "../userList/UserList";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

export function UserListPage() {
    const [userList, setUserList] = useState();
    const {pageNumber} = useParams();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users?page=${pageNumber}`)
                .then(response => response.json())
                .then(userListJson => setUserList(userListJson.results));
        },
        [pageNumber]
    );

    return <main>
        <h1>MyFace - Users</h1>
        {
            userList !== undefined
                ? <UserList userList={userList} />
                : <p>Loading users...</p>
        }
    <Link to={`?page=${pageNumber}`}>Next</Link>
    <Link to={`?page=${pageNumber}`}>Previous</Link>

    </main>

   
}