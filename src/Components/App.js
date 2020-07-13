import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Jumbotron from "./Jumbotron";
import NewPost from "./NewPost";
import Home from "./Home";
import Post from "./Post";

function App() {
    const [blogPost, setBlogPost] = useState([]);
    console.log(blogPost);
    const addPost = (post) => {
        setBlogPost((d) => [...d, post]);
    };

    const editPost = (post) => {
        const matchingId = (id) => id.id === post.id;
        const editedPostIdx = blogPost.findIndex(matchingId);
        const postCopy = [...blogPost];
        postCopy.splice(editedPostIdx, 1, post);

        setBlogPost(postCopy);
    };

    return (
        <>
            <Jumbotron />
            <Switch>
                <Route exact path="/new">
                    <NewPost addPost={addPost} />
                </Route>
                <Route exact path="/:postId">
                    <Post blogs={blogPost} editPost={editPost} />
                </Route>
                <Route exact path="/">
                    <Home blogs={blogPost} />
                </Route>
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
