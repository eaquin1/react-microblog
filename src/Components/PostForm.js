import React, { useState } from "react";



function PostForm({post, save, cancel}) {
   
    const [data, setData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((d) => ({ ...d, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
    }
    return (
        <div className="container">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        value={data.body}
                        onChange={handleChange}
                        rows={10}
                    />
                </div>
                
                <button className="btn btn-primary">
                    Save
                </button>
            </form>
            <button className="btn btn-secondary" onClick={cancel}>Cancel</button>
        </div>
    );
}

PostForm.defaultProps = {
    post: {title: "", description: "", body: ""}
}
export default PostForm;
