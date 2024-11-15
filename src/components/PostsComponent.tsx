import React, {useEffect} from 'react';
import PostComponent from "./PostComponent";
import {useStore} from "../stores/store";

const PostsComponent = () => {
    let {postStoreSlice:{allPosts, loadPosts}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                loadPosts(value)
            })
    }, []);
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;