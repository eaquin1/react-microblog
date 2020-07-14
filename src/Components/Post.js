import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "./PostForm";
import CommentForm from "./CommentForm";
function Post({ blogs, editPost }) {
    const { postId } = useParams();
    /** Get the correct post */
    const thisBlog = blogs.filter((blog) => blog.id === postId);
    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState("");
    /** Toggle editing on/off */
    const toggleEdit = () => {
        setIsEditing((edit) => !edit);
    };

    const edit = ({ title, description, body }) => {
        editPost({
            id: thisBlog[0].id,
            title: title,
            description: description,
            body: body,
        });

        toggleEdit();
    };

    const addComment = (comment) => {
        setComments((c) => [...c, comment]);
    };

    const handleDelete = (c) => {
    
        const commentIdx = comments.indexOf(c)
        const commentCopy = [...comments]
        commentCopy.splice(commentIdx, 1)
        setComments(commentCopy)
    }
    return (
        <div className="container">
            {isEditing ? (
                <PostForm post={thisBlog[0]} save={edit} cancel={toggleEdit} />
            ) : (
                <>
                    <h4>{thisBlog[0].title}</h4>
                    <i
                        className="fas fa-edit text-primary"
                        onClick={toggleEdit}
                    />
                    <i className="fas fa-times text-danger" />
                    <p>{thisBlog[0].description}</p>
                    <p>{thisBlog[0].body}</p>
                    {comments.length > 0
                        ? comments.map((c) => (
                              <div key={c}>
                                  <p >{c}</p>
                                  <i
                                      className="fa fa-times text-danger mr-2"
                                      onClick={() => handleDelete(c)}
                                  />
                              </div>
                          ))
                        : ""}
                </>
            )}
            <CommentForm addComment={addComment} />
        </div>
    );
}

export default Post;
