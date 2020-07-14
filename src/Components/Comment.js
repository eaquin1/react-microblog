import React from "react"

/** CommentList: shows a list of comments passed down as props
 * 
 * Comments can be deleted by clicking next to them; this is handled by the parent
 * 
 */

 function Comment({text, id}) { 
return (
    <div>
        {text}
    </div>
)
 }

 export default Comment;