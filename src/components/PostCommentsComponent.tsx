import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../stores/store";
import {PostWithCommentsType} from "../models/PostWithCommentsType";


const PostCommentsComponent = () => {

    const {postStoreSlice:{allPosts}, commentStoreSlice:{allComments}} = useStore();

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() => {
        return allPosts.map(post => ({
            postWithComment: {
                ...post,
                comments: allComments.filter(comment => comment.postId === post.id),
            },
        }));
    }, [allPosts, allComments]);

    useEffect(() => {
        setPostWithCommentsState(postWithCommentsArray)
    }, [postWithCommentsArray]);
    return (
        <div>
            {
                postWithCommentsState.map(post => <div key={post.postWithComment.id}>
                    <h3>{post.postWithComment.id}. {post.postWithComment.title}</h3>
                    <ul>
                        {
                            post.postWithComment.comments.map(comment=> <li key={comment.id}>{comment.id}. {comment.name}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default PostCommentsComponent;