import React from "react";
import { likePost } from "../../../clients/myFaceClients";
import { dislikePost } from "../../../clients/myFaceClients";
import "./Post.scss";


export function Post({ post }) {
    return <div className="post">
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        {
           post.postedBy !== undefined
           ? <p>Posted by {post.postedBy.name} on {post.createdAt}</p>
           : <p>{post.createdAt}</p>
        }
        <button onClick={() => likePost(post.id)}>👍</button>
        <button onClick={() => dislikePost(post.id)}>👎</button>
        
    </div>
}