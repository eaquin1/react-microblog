import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList"
import {useSelector, useDispatch} from "react-redux";
import {
    getPostFromApi,
    updatePostInApi,
    sendCommentToApi,
    removeCommentFromApi,
    removePostFromApi
} from "../actions/posts";


function Post() {
    const postId = Number(useParams().postId);
    const history = useHistory();
    const dispatch = useDispatch();
    const post =useSelector(state => state.posts[postId])
    const [isEditing, setIsEditing] = useState(false);

    useEffect(function loadPost() {
        async function getPost() {
            dispatch(getPostFromApi(postId))
        }
        if (!post) {
            getPost()
        }
    }, [dispatch, postId, post])
    console.log(postId)
    console.log(post)
    
   
    
    // //const [comments, setComments] = useState("");
    // /** Toggle editing on/off */
    const toggleEdit = () => {
        setIsEditing((edit) => !edit);
    };

    const edit = ({ title, description, body }) => {
        dispatch(updatePostInApi({
            postId,
            title,
            description,
            body
        }));

        toggleEdit();
    };

    const deletePost = () => {
        dispatch(removePostFromApi(postId))
        history.push("/")
    }

    const newComment = (text) => {
        dispatch(sendCommentToApi(postId, text));
    };

    const deleteComment = (commentId) => {
        dispatch(removeCommentFromApi(postId, commentId))
    }
    return (
        <div className="container">
            {isEditing ? (
                <PostForm post={post} save={edit} cancel={toggleEdit} />
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <i
                        className="fas fa-edit text-primary"
                        // onClick={toggleEdit}
                    />
                    <i className="fas fa-times text-danger" onClick={deletePost}/>
                    <p>{post.description}</p>
                    <p>{post.body}</p>
                    <h4>Comments</h4>
                </>
            )} 
           <CommentForm addComment={newComment} />
           <CommentList comments={post.comments} deleteComment={deleteComment}/> 
        </div>
     );
}

export default Post;
