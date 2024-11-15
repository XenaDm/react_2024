import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post:IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h3><b>{post.userId}</b>.{post.id}. {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;