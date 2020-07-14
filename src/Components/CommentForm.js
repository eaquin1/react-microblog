import React, {useState} from "react"

function CommentForm({addComment}) {
    const [comment, setComment] = useState("")

    const handleInput = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(comment)
        setComment("")
    }
return (
    <form onSubmit={handleSubmit}>
    <input onChange={handleInput}
        placeholder="New Comment"
        value={comment}
        name="comment"
        className="form-control"/>
    <button className="btn btn-primary">Add</button>
    </form>
)
}

export default CommentForm