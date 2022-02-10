import React from "react";
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
        
    </div>
}