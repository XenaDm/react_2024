import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>{comment.postId}.{comment.id}. {comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;