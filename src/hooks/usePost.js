import { useState } from "react";
import {getPostApi, getCommentApi} from '../api/post';

export function usePost(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState(null);


    const getPost = async () => {
        try {
            setLoading(true);
            const response = await getPostApi();
            setLoading(false);
            setPost(response)
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    const getComment = async (post_id) => {
        try {
            setLoading(true);
            const response = await getCommentApi(post_id);
            setLoading(false);
            setComment(response)
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    return {
        loading,
        error,
        post,
        getPost,
        getComment,
        comment
    }
}