import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "./PostForm";
function Post({ blogs, addPost }) {
    const { postId } = useParams();
    /** Get the correct post */
    const thisBlog = blogs.filter((blog) => blog.id === postId);
    const [isEditing, setIsEditing] = useState(false);

    /** Toggle editing on/off */
    const toggleEdit = () => {
        setIsEditing((edit) => !edit);
    };

    const edit = ({ title, description, body }) => {
        addPost({ title: title, description: description, body: body });

        toggleEdit();
    };

    return (
        <div className="container">
            {isEditing ? (
                <PostForm post={thisBlog} save={edit} cancel={toggleEdit} />
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
                </>
            )}
        </div>
    );
}

export default Post;
