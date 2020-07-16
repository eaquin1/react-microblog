import React from "react";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";

import { sendPostToApi } from "../actions/posts";
import { useDispatch } from "react-redux";

function NewPost() {
    const history = useHistory();
    const dispatch = useDispatch();

    /**Adds post and sends it to redux state */
    const add = ({ title, description, body }) => {
        dispatch(sendPostToApi(title, description, body));
        history.push("/");
    };
    function cancel() {
        history.push("/");
    }

    return (
        <main>
            <h1>New Post</h1>
            <PostForm save={add} cancel={cancel} />
        </main>
    );
}

export default NewPost;
