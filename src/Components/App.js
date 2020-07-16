import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Jumbotron from "./Jumbotron";
import NewPost from "./NewPost";
import Home from "./Home";
import Post from "./Post";

function App() {

    return (
        <>
            <Jumbotron />
            <Switch>
                <Route exact path="/new">
                    <NewPost />
                </Route>
                <Route exact path="/:postId">
                    <Post />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
