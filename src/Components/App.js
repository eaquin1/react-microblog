import React, {useState} from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import Jumbotron from "./Jumbotron"
import NewPost from "./NewPost"
import Home from "./Home"
import Post from "./Post"


function App() {

  const [blogPost, setBlogPost] = useState([])
console.log(blogPost)
  const addPost = (post) => {
    setBlogPost(d => (
      [...d, post]
    ))
  }

  return (
    <>
    <Jumbotron />
    <Switch>
      <Route exact path="/new">
        <NewPost addPost={addPost}/>
      </Route>
      <Route exact path="/:postId">
        <Post blogs={blogPost} addPost={addPost}/>
      </Route>
      <Route exact path="/">
        <Home blogs={blogPost} addPost={addPost}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </>
  );
}

export default App;
