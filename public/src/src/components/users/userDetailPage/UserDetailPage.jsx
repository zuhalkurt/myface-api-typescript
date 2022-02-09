import React, {useState, useEffect} from "react";
import { PostList } from "../../posts/postList/PostList.jsx";
import { User } from "../user/User.jsx";
import { useParams } from "react-router-dom";
import "./UserDetailPage.scss"


export function UserDetailPage () {
    const [user, setUser] = useState();
    const {userId} = useParams();

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
        <img className="cover" src={user.coverImageUrl} alt="User cover" /> 
        <div className="user-profile-card">
            <User user={user} />
        </div>
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
{userPageContent}
</main>
}

