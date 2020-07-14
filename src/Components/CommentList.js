import React from "react"
import Comment from "./CommentForm"

function CommentList({comments=[]}){
    console.log(comments)
    return (
        
        comments.map(c => (
            <Comment 
                key={Object.keys(c)[0]}
                id={Object.keys(c)[0]}
                text={Object.values(c)}
                />
        ))
    )

}

export default CommentList