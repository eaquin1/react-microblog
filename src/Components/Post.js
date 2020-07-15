import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList"
import {useSelector, useDispatch} from "react-redux";
import {
    updatePost,
    removePost,
    addComment,
    removeComment
} from "../actions/posts";
import { v4 as uuid } from "uuid";

function Post() {
    const { postId } = useParams();
    /** Get the correct post */
    const blogPost = useSelector(state => state.posts.filter((blog) => blog.id === postId))
    const history = useHistory();
    const dispatch = useDispatch();
    
    // const thisBlog = blogs.filter((blog) => blog.id === postId);
    const [isEditing, setIsEditing] = useState(false);
    //const [comments, setComments] = useState("");
    /** Toggle editing on/off */
    const toggleEdit = () => {
        setIsEditing((edit) => !edit);
    };

    const edit = ({ title, description, body }) => {
        dispatch(updatePost({
            id: blogPost[0].id,
            title: title,
            description: description,
            body: body,
        }));

        toggleEdit();
    };

    const deletePost = () => {
        dispatch(removePost(postId))
        history.push("/")
    }

    const newComment = (comment) => {
        const id = uuid()
        dispatch(addComment(postId, {[id]: comment}));
    };

    const deleteComment = (id) => {
    dispatch(removeComment(postId, id))
        // const commentIdx = comments.indexOf(c)
        // const commentCopy = [...comments]
        // commentCopy.splice(commentIdx, 1)
        // setComments(commentCopy)
    }
    return (
        <div className="container">
            {isEditing ? (
                <PostForm post={blogPost[0]} save={edit} cancel={toggleEdit} />
            ) : (
                <>
                    <h3>{blogPost[0].title}</h3>
                    <i
                        className="fas fa-edit text-primary"
                        onClick={toggleEdit}
                    />
                    <i className="fas fa-times text-danger" onClick={deletePost}/>
                    <p>{blogPost[0].description}</p>
                    <p>{blogPost[0].body}</p>
                    <h4>Comments</h4>
                </>
            )}
            <CommentForm addComment={newComment} />
            <CommentList comments={blogPost[0].comments} deleteComment={deleteComment}/>
        </div>
    );
}

export default Post;
