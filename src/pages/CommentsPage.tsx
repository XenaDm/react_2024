import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {apiService} from "../services/api.service";

const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        apiService.commentsService.getAll<IComment[]>('/comments').then(value => setComments(value))
    }, []);

    return (
        <>
            {
                comments.map(value =>
                    <div>
                        {value.postId} - {value.name}
                    </div>)
            }
        </>
    );
};

export default CommentsPage;