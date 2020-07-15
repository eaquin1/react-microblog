import React from "react"
import Comment from "./Comment"

function CommentList({comments=[], deleteComment}){
    console.log(comments)
    return (
        
        comments.map(c => (
            <Comment 
                key={Object.keys(c)[0]}
                id={Object.keys(c)[0]}
                text={Object.values(c)[0]}
                deleteComment = {deleteComment}
                />
        ))
    )

}

export default CommentList