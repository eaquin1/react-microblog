import React from "react";

/** CommentList: shows a list of comments passed down as props
 *
 * Comments can be deleted by clicking next to them; this is handled by the parent
 *
 */

function Comment({ text, id, deleteComment }) {
    function handleDelete(e) {
        e.preventDefault();
        deleteComment(id);
    }
    return (
        <div>
            <p>
                {deleteComment && (
                    <i
                        className="fa fa-times text-danger mr-2"
                        onClick={handleDelete}
                    />
                )}

                {text}
            </p>
        </div>
    );
}

export default Comment;
