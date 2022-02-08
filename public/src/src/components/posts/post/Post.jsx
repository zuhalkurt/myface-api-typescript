import React from "react";

export function Post({ post }) {
    return <div>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} />
        <p>Posted by {post.postedBy} on {post.createdAt}</p>
    </div>
}