import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type PostWithCommentsType = {
    postWithComment: IPost & { comments: IComment[] };
}