import React from "react";
import TitleList from "./TitleList"

function Home() {
    
    // let postList = blogs.map((p) => (
    //     <div key={p.id}>
    //         <Link to={p.id}><h4>{p.title}</h4></Link>
    //         <p>{p.description}</p>
    //         <p>{p.body}</p>
    //     </div>
    // ));
    return (
        <div className="container">
            <h1>Home</h1>
            <TitleList />
        </div>
    );
}

export default Home;
