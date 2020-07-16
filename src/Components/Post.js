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
    removePostFromApi,
    sendVoteToApi
} from "../actions/posts";


function Post() {
    const [isEditing, setIsEditing] = useState(false);
    const postId = Number(useParams().postId);
    const history = useHistory();
    const post = useSelector(st => st.posts[postId]);
    const dispatch = useDispatch();
  
    /** If we don't have the post, request it from API. */
  
    useEffect(function loadPostWhenPostOrIdChanges() {
      async function getPost() {
        dispatch(getPostFromApi(postId));
      }
      if (!post) {
        getPost();
      }
    }, [dispatch, postId, post]);
    
   
    
    // //const [comments, setComments] = useState("");
    // /** Toggle editing on/off */
    const toggleEdit = () => {
        setIsEditing((edit) => !edit);
    };

    const edit = ({ title, description, body }) => {
        console.log(postId)
        dispatch(updatePostInApi(
            postId,
            title,
            description,
            body
        ));

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

    /* Handle voting */
    const vote = (direction) => {
        dispatch(sendVoteToApi(postId, direction))
    }
    if(!post) return <p>Loading</p>;

    return (
        <div className="container">
            {isEditing ? (
                <PostForm post={post} save={edit} cancel={toggleEdit} />
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <i
                        className="fas fa-edit text-primary"
                        onClick={toggleEdit}
                    />
                    <i className="fas fa-times text-danger" onClick={deletePost}/>
                    <p>{post.description}</p>
                    <p>{post.body}</p>
                    <div>
                        <b>{post.votes} votes:</b>
                        <i className="fas fa-thumbs-up text-success" onClick={e => vote("up")} />
                        <i className="fas fa-thumbs-down text-danger" onClick={e => vote("down")} />
                    </div>
                    <h4>Comments</h4>
                </>
            )} 
            <hr></hr>
           <CommentForm addComment={newComment} />
           <CommentList comments={post.comments} deleteComment={deleteComment}/> 
        </div>
     );
}

export default Post;
