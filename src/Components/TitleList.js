import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TitleList() {

    const blogPosts = useSelector((store) => store.posts);
    
    
    let list = blogPosts.map((b) => (
        <div className="card" key={b.id}>
            <div className="card-body">
                <div className="card-title text-center">
                    <Link to={"/" + b.id}>{b.title}</Link>
                </div>
                <div className="card-text">{b.description}</div>
            </div>
        </div>
    ));
    return <div className="row">{list}</div>;
}

export default TitleList;
