import { useState } from "react";
import {getPostApi, getCommentApi, getTagsApi, getPostByTagApi} from '../api/post';

export function usePost(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState(null);
    const [tags, setTags] = useState(null);
    const [postByTag, setPostByTags] = useState(null);




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
    const getTags = async () => {
        try {
            setLoading(true);
            const response = await getTagsApi();
            setLoading(false);
            setTags(response)
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };
    const getPostByTag = async (tag) => {
        try {
            setLoading(true);
            const response = await getPostByTagApi(tag);
            setLoading(false);
            setPostByTags(response)
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
        comment,
        getTags,
        tags,
        getPostByTag,
        postByTag
    }
}