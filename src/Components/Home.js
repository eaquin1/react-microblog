import React from "react";
import {Link} from "react-router-dom"
function Home({ blogs }) {
    
    let postList = blogs.map((p) => (
        <div key={p.id}>
            <Link to={p.id}><h4>{p.title}</h4></Link>
            <p>{p.description}</p>
            <p>{p.body}</p>
        </div>
    ));
    return (
        <div className="container">
            <h1>Home</h1>
            {postList}
        </div>
    );
}

export default Home;
