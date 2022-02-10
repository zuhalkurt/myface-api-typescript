import React, { useEffect, useState } from "react";
import {Link, useSearchParams } from "react-router-dom";
import { PostList } from "../postList/PostList";
import {getPosts} from "../../../clients/myFaceClients.js";



export function PostListPage() {
    const [postList, setPostList] = useState();
    const [next, setNext] = useState ();
    const [previous, setPrevious] = useState();

    const [searchParams] = useSearchParams();
    const pageNumber = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    useEffect(
        function() {
            getPosts(pageNumber, pageSize)
                .then(postsPage => {
                    setPostList(postsPage.results);
                    setNext(postsPage.next);
                    setPrevious(postsPage.previous);
                });
        },
        [pageNumber, pageSize]
    );
    
    const nextPrevLinks = <div>
        {
            previous
                ? <Link className="page-arrow" to={previous}>Previous</Link>
                : <></>
        }
        {
            next
                ?<Link className="page-arrow" to={next}>Next</Link>
                :<></>
        }
    </div>

    let listElements;
    if(postList !== undefined) {
        listElements = <>
            {nextPrevLinks}
            <PostList postList={postList} />
            {nextPrevLinks}
        </>
    } else {
        listElements = <p>Loading posts...</p>
    }
    return <main>
        <h1>MyFace - Posts</h1>
        {listElements}
    </main>
}