import React, {useState, useEffect} from "react";
import { PostList } from "../../posts/postList/PostList.jsx";
import { User } from "../user/User.jsx";


export function UserDetailPage ({userId}) {
    const [user, setUser] = useState();

    useEffect(
        function() {
            fetch(`http://localhost:3001/users/${userId}`)
                .then(response => response.json())
                .then(userJson => setUser(userJson));
        },
        [userId]
    );

    let userPageContent;
    
    if (user !== undefined) {
        userPageContent = <div>
        <User user={user} />
        <h2>{user.name}'s Posts</h2>
        <PostList postList={user.posts}/> 
        <h2>{user.name} Likes</h2>
        <PostList postList={user.likes}/> 
        <h2>{user.name} Dislikes</h2>  
        <PostList postList={user.dislikes}/>  
        </div>
    }else {
        userPageContent= <p>Loading user details...</p>
    }

    
return <main>
<h1>Myface - User Page </h1>
{userPageContent}
</main>
}

