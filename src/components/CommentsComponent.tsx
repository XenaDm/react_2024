import React, {useEffect} from 'react';

import CommentComponent from "./CommentComponent";
import {useStore} from "../stores/store";

const CommentsComponent = () => {
    const {commentStoreSlice:{allComments, loadComments}} = useStore();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                loadComments(value)
            })
    }, []);

    return (
        <div>
            {
                allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default CommentsComponent;