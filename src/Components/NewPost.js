import React from "react"
import PostForm from "./PostForm"
import {useHistory} from "react-router-dom"
import { v4 as uuid } from 'uuid';
function NewPost({addPost}) {
    const history = useHistory()

    /**Adds post and sends it to parent (App.js) state */
    function add({title, description, body}) {
        addPost({id: uuid(), title: title, description: description, body: body
        })
        history.push("/")
    }
    function cancel() {
        history.push("/")
    }

    return (
        <main>
            <h1>New Post</h1>
            <PostForm save={add} cancel={cancel} />
        </main>
    )
}

export default NewPost
// let arr = [{
// body: "sss",
// description: "Purple flowers out your window",
// id: "ac60ed83-18c8-46b7-a027-be8d4fd426a0",
// title: "Rosaphine"}, {body: "sadfadsfdsafdasfadsfsdf",
// description: "Yellow",
// id: "be8d4fd426a0",
// title: "Gini"}]