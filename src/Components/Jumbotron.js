import React from "react";
import { Link } from "react-router-dom";
function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Microblog</h1>
            <p className="lead">Get in the rhythm of blogging!</p>
            <hr className="my-4" />
            <Link to="/" style={{ margin: "20px" }}>
                Blog
            </Link>
            <Link to="/new">Add a new post</Link>
        </div>
    );
}

export default Jumbotron;
