import React, {useState} from "react"
import {useParams} from "react-router-dom"
import PostForm from "./PostForm"
function Post ({blogs, addPost}) {

    const {postId} = useParams()
    const thisBlog = blogs.filter(blog => blog.id === postId)
    const [isEditing, setEditing] = useState(false)
 

    return (
        <div className="container">
            {isEditing 
            ? <PostForm post={thisBlog} save={addPost} /> : 
            (
                <>
            <h4>{thisBlog[0].title}</h4>
            <i className="fas fa-edit text-primary" onClick={() => setEditing(true)}/>
            <i className="fas fa-times text-danger"/>
            <p>{thisBlog[0].description}</p>
            <p>{thisBlog[0].body}</p>
            </>
            )}
        </div>
        
    )
}

export default Post