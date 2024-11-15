import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {create} from "zustand/react";

type StoreType = {
    userStoreSlice: {
        allUsers: IUser[],
        loadUsers:(users:IUser[])=>void,
    },
    postStoreSlice: {
        allPosts: IPost[]
        loadPosts:(posts:IPost[])=>void,
    },
    commentStoreSlice: {
        allComments: IComment[],
        loadComments:(comments:IComment[])=>void,
    },
}
export const useStore = create<StoreType>()((set)=>({
    userStoreSlice: {
        allUsers: [],
        loadUsers:(users) => {
            return set((state) => ({
                    ...state,
                    userStoreSlice:{
                        ...state.userStoreSlice,
                        allUsers: users,
                    },
            }));
        },
    },
postStoreSlice:{
        allPosts:[],
        loadPosts: (posts) => {
            return set(state => {
                return {
                    ...state,
                    postStoreSlice: {
                        ...state.postStoreSlice,
                        allPosts: posts
                    }
                }
            })
        }
},
    commentStoreSlice:{
        allComments:[],
        loadComments: (comments) => {
            return set(state => {
                return {
                    ...state,
                    commentStoreSlice: {
                        ...state.commentStoreSlice,
                        allComments: comments
                    }
                }
            })
        }
    }
}));
